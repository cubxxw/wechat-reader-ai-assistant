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
    const toolbarContainer = document.querySelector('.readerTopBar');
    if (!toolbarContainer) return;

    const toolbar = document.createElement('div');
    toolbar.className = 'weread-ai-tools';
    toolbar.innerHTML = `
      <div id="summarize" class="tool-item" title="AI生成本章摘要">
        <i class="icon-summary"></i>
        <span>生成摘要</span>
      </div>
      <div id="extract" class="tool-item" title="提取重点内容">
        <i class="icon-extract"></i>
        <span>提取重点</span>
      </div>
    `;
    
    toolbarContainer.appendChild(toolbar);
    this.bindEvents();
  }

  private static bindEvents() {
    document.getElementById('summarize')?.addEventListener('click', this.handleSummarize);
    document.getElementById('extract')?.addEventListener('click', this.handleExtract);
  }

  private static async handleSummarize() {
    const button = document.getElementById('summarize');
    if (!(button instanceof HTMLButtonElement)) return;
    
    try {
      button.disabled = true;
      button.textContent = '生成中...';
      
      const content = ContentExtractor.getCurrentChapterContent();
      const prompt = `
  请对以下内容进行摘要，要求：
  1. 提炼核心观点和关键信息
  2. 保持逻辑清晰，层次分明
  3. 语言简洁准确
  4. 突出重要概念和结论
  
  内容：${content}
  `;
  
      chrome.runtime.sendMessage({
        type: 'SUMMARIZE',
        content: prompt
      }, (response) => {
        if (response.summary) {
          ContentExtractor.showSummaryModal(response.summary);
        } else {
          throw new Error(response.error || '生成失败');
        }
      });
    } catch (error) {
      console.error('摘要生成失败:', error);
      alert('摘要生成失败，请稍后重试');
    } finally {
      button.disabled = false;
      button.textContent = '生成摘要';
    }
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
