# 微信读书AI助手

**微信读书AI助手**是一款基于AI技术的浏览器扩展，旨在辅助用户高效阅读微信读书，通过自动摘要、关键点提取、思维导图生成等功能，帮助用户快速理解和总结书籍内容。以前需要花费大量时间阅读一本书，现在你可以轻松阅读更多书籍，大幅提升年度阅读量。

## 需求介绍

针对微信读书的AI助手，可以辅助AI阅读，AI帮助我们快速阅读书籍，得到总结。以前都一本书的时间，现在可以读100本，一年阅读量10000本+轻轻松松～

## 功能需求

### 1. 快速获取书籍核心内容

- **自动摘要**
  - 根据书籍内容生成高度浓缩的摘要，快速提供书籍的核心思想和关键论点。
  - 可选摘要类型：
    - 5分钟快速读
    - 关键章节精读
    - 一句话总结

- **关键点提取**
  - 提取书中的**金句**、**关键数据**、**核心概念**，并标注出处。

- **思维导图生成**
  - 根据书籍内容生成结构化的思维导图，展示书籍逻辑框架和内容全貌。

- **章节速览**
  - 按章节生成摘要，让用户快速了解某一章节的内容。

### 2. 个性化阅读体验

- **定制化摘要**
  - 根据用户需求生成摘要，如：
    - 专注于某一主题（例如“商业”、“历史背景”）。
    - 面向不同职业背景（如“学生版”、“职场精英版”）。
    - 目标学习内容（如“适合做演讲提纲”或“写作灵感”）。

- **难点讲解**
  - 对书中难以理解的概念，提供通俗易懂的解释，并附带实际应用场景。

- **语音阅读模式**
  - 为用户提供书籍摘要或重要章节的语音版，方便在碎片时间进行学习。

### 3. 阅读规划与辅助

- **快速推荐**
  - 根据用户已读书籍，推荐相关主题或作者的书籍，提升阅读效率。

- **目标制定与进度追踪**
  - 设置年度阅读目标，例如“100本书”，并分解为月度/周目标。
  - 自动生成每日阅读计划，并提醒用户完成。

- **高效搜索**
  - 针对某一特定主题或问题，直接从书籍内容中检索相关信息。
  - 支持搜索全书、指定章节或关键词。

### 4. 深度学习与互动

- **生成问答对**
  - 根据书籍内容生成问题和答案，用于加深理解（适合考试或知识检测）。

- **生成书评**
  - 提供针对书籍内容的深度评论和用户可以参考的书评模板。

- **阅读记录分析**
  - 分析用户的阅读数据，生成阅读偏好报告，建议改进阅读习惯。

- **跨书籍知识整合**
  - 如果用户读过多本书，AI可以进行跨书整合，提取关联知识点，帮助构建知识网络。

### 5. 微信读书特化功能

- **高亮内容智能管理**
  - 对用户在微信读书中标注的高亮内容进行归纳分类，生成知识卡片。

- **实时对话助手**
  - 在阅读时随时提问，例如“这段话的意思是什么？”或“有什么类似的例子？”
  - 提供背景补充或相关主题延伸阅读。

- **书籍评分预测**
  - 预测用户对书籍的评分，并提示阅读可能性较低的章节。

### 6. AI辅助内容输出

- **知识卡片生成**
  - 将书籍摘要转化为可分享的图文内容，用于社交平台分享。

- **演讲或汇报提纲**
  - 针对书籍生成演讲提纲或PPT结构。

- **学习笔记自动化**
  - 为用户生成全面、易于复习的学习笔记。

### 7. 自定义功能

- **API配置管理**
  - 提供方便的API Base和API Key配置入口，支持个人定制化模型调用。

- **多语言支持**
  - 提供翻译功能，用于阅读外文书籍。

### 关键效益

- **节省时间**：将几小时的阅读浓缩为几分钟的总结。
- **高效学习**：通过多样化的提取与整合工具，让用户能够更快掌握书籍内容。
- **知识留存**：辅助用户整理笔记，便于后续回顾与深度应用。

### 未来扩展

- 支持群组学习（与好友分享书摘与笔记）。
- 提供用户“知识地图”功能，展示所有阅读书籍间的关联性和知识网络。

## 技术栈选择

- **语言**：TypeScript
- **前端框架**：React
  - 使用React可快速构建复杂的用户界面。
- **插件工具**：Web Extension API
  - 支持Chrome、Firefox和Edge等主流浏览器。
- **后端服务**（可选）：
  - 配合自定义API服务（如摘要和NLP模型调用）。
  - 使用OpenAI的API进行文本处理。

---

## 安装与使用

### 1. 项目准备与规划

#### 1.1 功能模块划分

按照需求文档，划分核心功能模块：

- **书籍内容提取与处理模块**
  - 自动摘要
  - 关键点提取
  - 思维导图生成

- **个性化设置模块**
  - 定制化摘要
  - 难点讲解
  - 语音模式

- **阅读辅助模块**
  - 推荐书籍
  - 目标制定与跟踪
  - 高效搜索

- **互动与深度学习模块**
  - 问答生成
  - 书评生成
  - 跨书整合

- **微信读书特化模块**
  - 高亮内容管理
  - 实时对话助手

- **辅助内容输出模块**
  - 知识卡片生成
  - 演讲提纲
  - 学习笔记

- **系统配置模块**
  - API配置
  - 多语言支持

#### 1.2 技术栈确定

- **语言**：TypeScript（增强代码安全性和开发效率）
- **前端框架**：React（组件化开发）
- **后端服务**：使用OpenAI API进行文本处理
- **浏览器扩展工具**：Web Extension API

#### 1.3 插件设计

设计插件的用户交互和界面：

- **主界面**：功能总览，展示摘要和分析。
- **配置界面**：API Base和API Key设置。
- **弹窗工具**：阅读时的实时助手。
- **悬浮窗**：微信读书页面上的即时功能（如高亮内容提取、实时提问）。

### 2. 开发环境搭建

#### 2.1 初始化项目

1. 使用Vite初始化React TypeScript项目：

   ```bash
   npm create vite@latest wechat-reader-ai -- --template react-ts
   cd wechat-reader-ai
   ```

2. 配置Web Extension：

   - 创建 `manifest.json`。
   - 定义权限（如 `tabs`、`storage`）。
   - 设置主入口页面和脚本文件。

#### 2.2 安装依赖

安装项目所需的依赖：

```bash
npm install react react-dom react-router-dom webextension-polyfill openai axios d3 js-mindmap
npm install --save-dev @types/node @types/react @types/react-dom @types/chrome typescript ts-loader css-loader style-loader copy-webpack-plugin webpack webpack-cli
```

#### 2.3 开发环境配置

- 配置Webpack进行开发和打包。
- 使用 `copy-webpack-plugin` 复制静态资源。
- 配置热更新，提高开发效率。
- 安装Chrome Extension Developer Tool进行调试。

### 3. 功能实现

#### 3.1 核心功能开发

##### 3.1.1 自动摘要模块

1. **API 集成**：

   配置调用OpenAI的GPT模型，用于摘要生成。

   ```typescript
   import axios from 'axios';

   const fetchSummary = async (text: string, apiKey: string) => {
     const response = await axios.post('https://api.openai.com/v1/chat/completions', {
       model: 'gpt-3.5-turbo',
       messages: [{
         role: 'user',
         content: `请对以下内容进行摘要，要求：
         1. 提炼核心观点和关键信息
         2. 保持逻辑清晰，层次分明
         3. 语言简洁准确
         4. 突出重要概念和结论

         内容：${text}`
       }]
     }, {
       headers: { Authorization: `Bearer ${apiKey}` }
     });
     return response.data.choices[0].message.content;
   };
   ```

2. **前端展示**：

   在UI上添加摘要类型选择（快速读、关键章节、一句话总结），并显示生成的摘要。

##### 3.1.2 关键点提取

- 调用OpenAI模型提取金句、数据、核心概念。
- 实现文本高亮和标注。

##### 3.1.3 思维导图生成

使用D3.js或js-mindmap生成思维导图。

```typescript
import MindMap from 'js-mindmap';

const renderMindMap = (data: any) => {
  const mindmap = new MindMap(document.getElementById('mindmap'), data);
  mindmap.render();
};
```

#### 3.2 微信读书特化功能

1. **高亮内容管理**：

   使用Web Extension API监听页面DOM的变化，获取用户高亮内容。

   ```typescript
   chrome.tabs.executeScript({
     code: `
       Array.from(document.querySelectorAll('.highlight')).map(node => node.innerText);
     `,
   });
   ```

2. **实时助手**：

   悬浮窗口调用GPT模型解答用户问题。

#### 3.3 个性化阅读与辅助模块

- **推荐系统**：基于用户阅读历史，调用推荐API或使用简单匹配算法。
- **目标制定与追踪**：使用 `chrome.storage` 保存用户目标和进度。

#### 3.4 自定义功能

- **API配置管理**：提供一个表单，存储用户的API Key。
- **多语言支持**：调用GPT的翻译功能。

### 4. 前端界面设计

#### 4.1 页面布局

- **主界面**：功能总览和摘要展示。
- **浮窗界面**：轻量化界面，用于悬浮显示内容。

#### 4.2 使用React组件

- **主组件**：负责各模块的状态管理。
- **子组件**：摘要展示、思维导图、提问助手。

### 5. 插件打包与发布

#### 5.1 打包插件

使用Webpack打包React项目，并添加`manifest.json`及必要资源文件。确保文件夹结构如下：

```yaml
/dist
  /styles
  manifest.json
  background.js
  contentScript.js
  popup.html
  popup.js
```

#### 5.2 本地测试

1. 在Chrome浏览器中打开 [扩展程序页面](chrome://extensions/)。
2. 开启“开发者模式”。
3. 点击“加载已解压的扩展程序”并选择`dist`文件夹。
4. 测试插件功能是否正常。

#### 5.3 发布到Chrome Web Store

1. 压缩打包好的插件为ZIP文件。
2. 登录 [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole)。
3. 上传ZIP文件并填写相关信息（描述、截图等）。
4. 提交审核，等待发布。

### 6. 使用说明

#### 6.1 安装插件

1. 下载插件源码并克隆到本地。
2. 进入项目目录，安装依赖：

   ```bash
   npm install
   ```

3. 构建项目：

   ```bash
   npm run build
   ```

4. 打开Chrome浏览器，进入[扩展程序页面](chrome://extensions/)。
5. 开启“开发者模式”。
6. 点击“加载已解压的扩展程序”，选择`dist`文件夹。

#### 6.2 配置API Key

1. 安装并加载插件后，点击浏览器工具栏中的插件图标，打开弹出窗口。
2. 在弹出窗口中，输入您的OpenAI API Key和API Base URL：
   - **OpenAI API Key**：在[OpenAI账户页面](https://platform.openai.com/account/api-keys)获取。
   - **API Base URL**：默认为 `https://api.openai.com/v1`，如有自定义需求可进行修改。
3. 点击“保存配置”按钮，完成API配置。

#### 6.3 使用插件功能

1. 打开微信读书的阅读页面（例如：https://weread.qq.com/web/reader/）。
2. 页面右下角会显示一个机器人图标（🤖）。点击图标，菜单会展开。
3. 选择“生成章节摘要”或“提取重点内容”进行相应操作。
4. 操作过程中，按钮会显示加载状态，完成后会弹出摘要或提取的内容。

### 7. 贡献指南

欢迎任何形式的贡献！请按照以下步骤参与项目：

1. Fork本仓库。
2. 创建您的Feature分支：`git checkout -b feature/YourFeature`
3. 提交您的更改：`git commit -m 'Add some feature'`
4. 推送到分支：`git push origin feature/YourFeature`
5. 打开Pull Request。

### 8. 许可证

本项目基于 [MIT License](LICENSE) 开源，详情请参阅LICENSE文件。

### 9. 参考链接

- [Chrome Web Store - AI阅读助手测试版](https://chromewebstore.google.com/detail/ai%E9%98%85%E8%AF%BB%E5%8A%A9%E6%89%8B%E6%B5%8B%E8%AF%95%E7%89%88/mfpmipdckdgjdmaffpehmhckhejkoioa)
- [OpenAI API Keys](https://platform.openai.com/account/api-keys)

## 技术细节

### API调用与错误处理

在调用OpenAI API前，确保已经在插件设置中配置了有效的API Key。如果API Key未配置或无效，插件将提示用户进行配置。

```typescript
private static async handleSummarize() {
  const aiBot = document.querySelector('.weread-ai-bot');
  if (!aiBot) return;

  const icon = aiBot.querySelector('.ai-bot-icon');
  if (!(icon instanceof HTMLElement)) return;
  
  try {
    if (!chrome.runtime) {
      throw new Error('Chrome runtime not available');
    }

    // 先检查配置
    const config = await chrome.storage.sync.get('config');
    if (!config.config?.apiKey) {
      throw new Error('请先在插件设置中配置 OpenAI API Key');
    }

    icon.textContent = '⏳';
    const content = this.getCurrentChapterContent();
    
    chrome.runtime.sendMessage({
      type: 'SUMMARIZE',
      content
    }, (response) => {
      if (chrome.runtime.lastError) {
        console.error('Runtime error:', chrome.runtime.lastError);
        throw new Error(chrome.runtime.lastError.message);
      }
      
      if (response.summary) {
        this.showSummaryModal(response.summary);
      } else {
        throw new Error(response.error || '生成失败');
      }
    });
  } catch (error) {
    console.error('摘要生成失败:', error);
    alert(error instanceof Error ? error.message : '摘要生成失败，请稍后重试');
  } finally {
    icon.textContent = '🤖';
  }
}
```

确保在调用API前，用户已经正确配置了API Key，并在`background`脚本中正确处理消息：

```typescript
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === 'SUMMARIZE') {
    try {
      const config = await StorageManager.getConfig();
      if (!config?.apiKey) {
        throw new Error('API Key 未配置');
      }

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
```

## 常见问题

### 1. 为什么插件提示“请先在插件设置中配置 OpenAI API Key”？

请确保您已经在插件的弹出窗口中正确输入了您的OpenAI API Key，并点击“保存配置”按钮保存设置。

### 2. 如何获取OpenAI API Key？

访问[OpenAI账户页面](https://platform.openai.com/account/api-keys)，登录后可以创建和管理您的API Keys。

### 3. 插件无法生成摘要，提示API调用失败？

请检查以下几点：
- 确保您的API Key正确且有效。
- 确保网络连接正常，可以访问OpenAI的API。
- 在`manifest.json`中配置了正确的权限和脚本路径。

## 反馈与支持

如果您在使用过程中遇到任何问题或有任何建议，欢迎提交Issue或Pull Request到本项目的GitHub仓库。