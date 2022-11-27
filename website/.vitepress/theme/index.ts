import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import './index.css';

import "@fontsource/raleway/latin-400.css";
import "@fontsource/raleway/latin-400-italic.css";
import "@fontsource/raleway/latin-700.css";
import "@fontsource/raleway/latin-700-italic.css";
import "@fontsource/source-code-pro/latin-400.css";

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {}
}
