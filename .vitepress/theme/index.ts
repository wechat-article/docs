import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

import './style.css'
import 'gitalk/dist/gitalk.css'

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
