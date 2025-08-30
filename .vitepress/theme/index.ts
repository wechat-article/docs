import DefaultTheme from "vitepress/theme";
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import Layout from "./Layout.vue";
import './style.css'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ router }) {
        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
            }
        }
    }
};
