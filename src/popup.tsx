import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import APIManager from './utils/api';
import StorageManager from './utils/storage';
import './styles/global.css';

const Popup: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiBase, setApiBase] = useState('');
  const [summary, setSummary] = useState('');
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    try {
      const config = await StorageManager.getConfig();
      if (config) {
        setApiKey(config.apiKey);
        setApiBase(config.apiBase);
      }
    } catch (error) {
      console.error('加载配置时出错:', error);
      setStatus({ message: '加载配置时出错，请稍后再试。', type: 'error' });
    }
  };

  const handleSaveConfig = async () => {
    setIsSaving(true);
    setStatus(null);
    try {
      if (!apiKey.trim()) {
        throw new Error('API Key不能为空。');
      }
      if (!apiBase.trim()) {
        throw new Error('API Base URL不能为空。');
      }

      await StorageManager.saveConfig({ apiKey, apiBase });
      APIManager.setConfig({ apiKey, apiBase });
      setStatus({ message: '配置已成功保存！', type: 'success' });
    } catch (error: any) {
      console.error('保存配置时出错:', error);
      setStatus({ message: error.message || '保存配置时出错，请稍后再试。', type: 'error' });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="popup">
      <h2>微信读书AI助手</h2>
      <div className="config-section">
        <input 
          type="password"
          placeholder="OpenAI API Key"
          value={apiKey}
          onChange={e => setApiKey(e.target.value)}
        />
        <input 
          type="text"
          placeholder="API Base URL"
          value={apiBase}
          onChange={e => setApiBase(e.target.value)}
        />
        <button onClick={handleSaveConfig} disabled={isSaving}>
          {isSaving ? '保存中...' : '保存配置'}
        </button>
        {status && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}
      </div>
      <div className="summary-section">
        {summary && <div className="summary">{summary}</div>}
      </div>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<Popup />);
}

export default Popup;