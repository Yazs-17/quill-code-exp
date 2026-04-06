import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from './App.vue';
import './style.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

// Initialize auth store after pinia is ready
import { useAuthStore } from './stores/auth';
const authStore = useAuthStore();
authStore.init();

// -------------------------------------------------------------
// === 🔌 初始化 everything-plugin 并装载系统的全家桶插件 ===
// -------------------------------------------------------------
import { appDriver } from './core/app-driver';
import { tagSyncPlugin } from './plugins/TagSyncPlugin';

// 注册插件
appDriver.register(tagSyncPlugin);

// 人为触发各个插件里定义的 'init' 钩子去完成各种初始化的数据获取
appDriver.emit('init', { app, pinia, router }).then(() => {
  console.log('[AppDriver] All plugins initialized!');
});
// -------------------------------------------------------------

app.mount('#app');
