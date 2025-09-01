import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
// import './style.css'
import 'vitepress-theme-teek/index.css'

// .vitepress/theme/index.ts
import "vitepress-theme-teek/theme-chalk/tk-aside.css";
import "vitepress-theme-teek/theme-chalk/tk-blockquote.css";
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css";
import "vitepress-theme-teek/theme-chalk/tk-nav.css";
// import "vitepress-theme-teek/theme-chalk/tk-nav-blur.css";
// import "vitepress-theme-teek/theme-chalk/tk-scrollbar.css";
import "vitepress-theme-teek/theme-chalk/tk-sidebar.css";
import "vitepress-theme-teek/theme-chalk/tk-table.css";


export default {
    extends: DefaultTheme,
    Layout,
};
