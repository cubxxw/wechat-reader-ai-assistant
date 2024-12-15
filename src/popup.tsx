import React, { useState, useEffect } from 'react';
import APIManager from './utils/api';
import StorageManager from './utils/storage';

const Popup: React.FC = () => {
  const [apiKey, setApiKey] = useState('');
  const [apiBase, setApiBase] = useState('');
  const [summary, setSummary] = useState('');

  useEffect(() => {
    loadConfig();
  }, []);

  const loadConfig = async () => {
    const config = await StorageManager.getConfig();
    if (config) {
      setApiKey(config.apiKey);
      setApiBase(config.apiBase);
    }
  };

  const handleSaveConfig = async () => {
    await StorageManager.saveConfig({ apiKey, apiBase });
    APIManager.setConfig({ apiKey, apiBase });
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
        <button onClick={handleSaveConfig}>保存配置</button>
      </div>
      <div className="summary-section">
        {summary && <div className="summary">{summary}</div>}
      </div>
    </div>
  );
};

export default Popup;