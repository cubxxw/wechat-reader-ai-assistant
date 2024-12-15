interface OpenAIConfig {
  apiKey: string;
  apiBase: string;
}

class APIManager {
  private static config: OpenAIConfig = {
    apiKey: '',
    apiBase: 'https://api.openai.com/v1'
  };

  static setConfig(config: Partial<OpenAIConfig>) {
    this.config = { ...this.config, ...config };
  }

  static getConfig(): OpenAIConfig {
    return this.config;
  }

  static async callOpenAI(prompt: string) {
    try {
      const response = await fetch(`${this.config.apiBase}/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{
            role: 'user',
            content: prompt
          }]
        })
      });
      return await response.json();
    } catch (error) {
      console.error('API调用失败:', error);
      throw error;
    }
  }
}

export default APIManager;
