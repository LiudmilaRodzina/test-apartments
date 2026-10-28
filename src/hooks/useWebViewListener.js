import { useEffect, useState } from 'react';
import { WebViewBridge } from '../services/WebViewBridge';

export const useWebViewListener = (eventType, initialValue = null) => {
  const [data, setData] = useState(() => {
    if (initialValue !== null) return initialValue;

    if (eventType === 'updateConfig') return WebViewBridge.lastConfigData;
    if (eventType === 'updatePrefixes') return WebViewBridge.lastPrefixes ?? [];

    return null;
  });

  useEffect(() => {
    const unsubscribe = WebViewBridge.subscribe(eventType, setData);
    return unsubscribe;
  }, [eventType]);

  return data;
};
