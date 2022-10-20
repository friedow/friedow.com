import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import './index.css';

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {}
}
