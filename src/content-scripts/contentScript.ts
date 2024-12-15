import StorageManager from '../utils/storage';

class ContentExtractor {
  static getBookTitle(): string {
    const titleElement = document.querySelector('.bookInfo_right_title');
    return titleElement ? titleElement.textContent?.trim() || '' : '';
  }

  static getCurrentChapterContent(): string {
    const contentElements = document.querySelectorAll('.readerChapter_content p');
    return Array.from(contentElements)
      .map(el => el.textContent)
      .join('\n');
  }

  static getHighlightedText(): string[] {
    const highlights = document.querySelectorAll('.highlight');
    return Array.from(highlights).map(el => el.textContent?.trim() || '');
  }

  static injectToolbar() {
    const aiBot = document.createElement('div');
    aiBot.className = 'weread-ai-bot';
    aiBot.innerHTML = `
      <div class="ai-bot-icon">🤖</div>
      <div class="ai-bot-menu" style="display: none;">
        <div class="menu-item" id="summarize">
          <span>生成章节摘要</span>
        </div>
        <div class="menu-item" id="extract">
          <span>提取重点内容</span>
        </div>
      </div>
    `;
    
    document.body.appendChild(aiBot);
    this.bindEvents();
  }

  private static bindEvents() {
    const aiBot = document.querySelector('.weread-ai-bot');
    if (!aiBot) return;

    const icon = aiBot.querySelector('.ai-bot-icon');
    const menu = aiBot.querySelector('.ai-bot-menu');

    icon?.addEventListener('click', () => {
      if (menu instanceof HTMLElement) {
        menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
      }
    });

    aiBot.querySelector('#summarize')?.addEventListener('click', async () => {
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
    });

    aiBot.querySelector('#extract')?.addEventListener('click', this.handleExtract);
  }

  static showSummaryModal(summary: string) {
    // 创建模态窗口元素
    const modal = document.createElement('div');
    modal.className = 'summary-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>章节摘要</h2>
        <p>${summary}</p>
      </div>
    `;
    document.body.appendChild(modal);

    // 绑定关闭事件
    modal.querySelector('.close-button')?.addEventListener('click', () => {
      modal.remove();
    });
  }

  private static async handleExtract() {
    const highlights = ContentExtractor.getHighlightedText();
    await StorageManager.saveHighlights(highlights);
  }
}

// 初始化内容提取器
ContentExtractor.injectToolbar();
