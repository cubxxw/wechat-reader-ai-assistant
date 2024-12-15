import APIManager from '../utils/api';
import StorageManager from '../utils/storage';

// 监听来自内容脚本的消息
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === 'SUMMARIZE') {
    try {
      const prompt = `
请为以下内容生成一个简洁、清晰且全面的摘要，涵盖主要观点和关键信息：

内容：
${message.content}

摘要：
      `;
      const apiResponse = await APIManager.callOpenAI(prompt);
      
      if (apiResponse.choices && apiResponse.choices.length > 0) {
        const summary = apiResponse.choices[0].message.content.trim();
        sendResponse({ summary });
      } else {
        throw new Error('API未返回有效的摘要。');
      }
    } catch (error) {
      console.error('生成摘要时出错:', error);
      sendResponse({ error: '生成摘要时出错，请确保API配置正确并稍后再试。' });
    }
    
    return true;
  } else if (message.type === 'EXTRACT_HIGHLIGHTS') {
    try {
      const highlights = await StorageManager.getHighlights();
      sendResponse({ highlights });
    } catch (error) {
      console.error('提取重点时出错:', error);
      sendResponse({ error: '提取重点时出错，请稍后再试。' });
    }
    
    return true;
  }
});
