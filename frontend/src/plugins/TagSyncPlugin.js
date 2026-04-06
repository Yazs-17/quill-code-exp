import { useTagStore } from '../stores/tag';

/**
 * TagSyncPlugin
 * 这是一个示范如何将一切系统集成到 `everything-plugin` 中的核心插件原型。
 * 本插件负责在应用生命周期的 init 阶段，自动获取 Tag 标签数据，分离了组件里的 onMounted() 代码。
 */
export const tagSyncPlugin = {
  name: 'TagSyncPlugin',
  version: '1.0.0',
  description: '在初始化时负责预加载远程的所有标签（Tags）。',
  
  hooks: {
    // 监听系统初始化钩子（这里的 init 可以由 driver 派发）
    init: async (context) => {
      console.log('[TagSyncPlugin] Init hook triggered, fetching tags in background...');
      const tagStore = useTagStore();
      
      try {
        await tagStore.fetchTags();
        console.log('[TagSyncPlugin] Tags successfully fetched and synced to pinia!');
      } catch (error) {
        console.error('[TagSyncPlugin] Failed to sync tags on startup:', error);
      }
    }
  }
};
