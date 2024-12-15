interface OpenAIConfig {
  apiKey: string;
  apiBase: string;
}

class APIManager {
  private static config: OpenAIConfig = {
    apiKey: '',
    apiBase: 'https://api.openai.com/v1'
  };

  private static cache: { [prompt: string]: string } = {};

  static setConfig(config: Partial<OpenAIConfig>) {
    this.config = { ...this.config, ...config };
  }

  static getConfig(): OpenAIConfig {
    return this.config;
  }

  static async callOpenAI(prompt: string): Promise<any> {
    if (this.cache[prompt]) {
      return { choices: [{ message: { content: this.cache[prompt] } }] };
    }

    try {
      const response = await fetch(`${this.config.apiBase}/chat/completions`, {
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

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message || 'API请求失败');
      }

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        const summary = data.choices[0].message.content.trim();
        this.cache[prompt] = summary; // 缓存摘要
        return data;
      } else {
        throw new Error('API未返回有效的摘要。');
      }
    } catch (error) {
      console.error('API调用失败:', error);
      throw error;
    }
  }
}

export default APIManager;
