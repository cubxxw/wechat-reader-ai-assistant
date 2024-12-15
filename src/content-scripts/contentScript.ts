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
    const toolbar = document.createElement('div');
    toolbar.className = 'weread-ai-toolbar';
    toolbar.innerHTML = `
      <button id="summarize">生成摘要</button>
      <button id="extract">提取重点</button>
    `;
    document.body.appendChild(toolbar);
    this.bindEvents();
  }

  private static bindEvents() {
    document.getElementById('summarize')?.addEventListener('click', this.handleSummarize);
    document.getElementById('extract')?.addEventListener('click', this.handleExtract);
  }

  private static async handleSummarize() {
    const content = ContentExtractor.getCurrentChapterContent();
    // 发送消息���background script处理
    chrome.runtime.sendMessage({
      type: 'SUMMARIZE',
      content
    });
  }

  private static async handleExtract() {
    const highlights = ContentExtractor.getHighlightedText();
    await StorageManager.saveHighlights(highlights);
  }
}

// 初始化内容提取器
ContentExtractor.injectToolbar();
