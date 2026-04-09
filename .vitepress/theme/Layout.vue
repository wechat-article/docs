<script lang="ts" setup>
import DefaultTheme from "vitepress/theme";
import {nextTick, onMounted, onUnmounted, provide} from "vue";
import {useData, useRouter, onContentUpdated} from "vitepress";
import mediumZoom from "medium-zoom";
import Comments from "./Comments.vue";

const {Layout} = DefaultTheme;

const {isDark} = useData()

const enableTransitions = () => {
  if ('startViewTransition' in document) {
    return window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  }
}

provide('toggle-appearance', async ({clientX: x, clientY: y}: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value;
    return
  }

  const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick()
  }).ready

  document.documentElement.animate(
      {clipPath: isDark.value ? clipPath.reverse() : clipPath},
      {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'forwards',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
      }
  )
})

// Setup medium zoom with the desired options
const setupMediumZoom = () => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });
};

// Apply medium zoom on load and re-apply on route changes
onContentUpdated(setupMediumZoom);

// Highlight heading on hash navigation
const router = useRouter()
const HIGHLIGHT_CLASS = 'heading-highlight'

function highlightHeading() {
  const hash = window.location.hash
  if (!hash) return
  document.querySelectorAll(`.${HIGHLIGHT_CLASS}`).forEach(el => el.classList.remove(HIGHLIGHT_CLASS))
  const target = document.querySelector(decodeURIComponent(hash))
  if (target && /^H[1-4]$/.test(target.tagName)) {
    target.classList.add(HIGHLIGHT_CLASS)
    setTimeout(() => target.classList.remove(HIGHLIGHT_CLASS), 4000)
  }
}

function scrollToTarget(hash: string) {
  if (!hash) return
  const target = document.querySelector(decodeURIComponent(hash)) as HTMLElement | null
  if (target) {
    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--vp-nav-height') || '64', 10)
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({ top, behavior: 'instant' })
    highlightHeading()
  }
}

function onHashChange() {
  scrollToTarget(window.location.hash)
}

onMounted(() => {
  // Intercept outline link clicks for precise scroll positioning
  document.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest?.('a[href^="#"]') as HTMLAnchorElement | null
    if (link) {
      e.preventDefault()
      e.stopImmediatePropagation()
      const hash = link.getAttribute('href')!
      history.replaceState(null, '', hash)
      // Use requestAnimationFrame to ensure we scroll after any pending layout
      requestAnimationFrame(() => scrollToTarget(hash))
    }
  }, true)
  window.addEventListener('hashchange', onHashChange)
  if (window.location.hash) {
    // Wait for images to load before scrolling to hash
    const images = document.querySelectorAll<HTMLImageElement>('.vp-doc img')
    if (images.length > 0) {
      let loaded = 0
      const total = images.length
      const check = () => { if (++loaded >= total) scrollToTarget(window.location.hash) }
      images.forEach(img => {
        if (img.complete) { check() }
        else { img.addEventListener('load', check, { once: true }); img.addEventListener('error', check, { once: true }) }
      })
      // Fallback timeout in case images take too long
      setTimeout(scrollToHash, 2000)
    } else {
      scrollToTarget(window.location.hash)
    }
  }
})
onUnmounted(() => window.removeEventListener('hashchange', onHashChange))
router.onAfterRouteChanged = () => nextTick(highlightHeading)
</script>

<template>
  <Layout>
    <template #doc-after>
      <Comments/>
    </template>
  </Layout>
</template>

<style>
.medium-zoom-overlay {
  backdrop-filter: blur(5rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 999;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>
