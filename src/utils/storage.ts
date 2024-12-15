class StorageManager {
  static async saveConfig(config: { apiKey: string; apiBase: string }) {
    await chrome.storage.sync.set({ config });
  }

  static async getConfig() {
    const result = await chrome.storage.sync.get('config');
    return result.config;
  }

  static async saveHighlights(highlights: string[]) {
    await chrome.storage.local.set({ highlights });
  }

  static async getHighlights() {
    const result = await chrome.storage.local.get('highlights');
    return result.highlights || [];
  }
}

export default StorageManager;
