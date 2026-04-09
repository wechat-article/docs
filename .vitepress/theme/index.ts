import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import './style.css'
// @ts-ignore
import CopyOrDownloadAsMarkdownButtons from 'vitepress-plugin-llms/vitepress-components/CopyOrDownloadAsMarkdownButtons.vue'


export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('CopyOrDownloadAsMarkdownButtons', CopyOrDownloadAsMarkdownButtons)
    }
};
