import { useEffect } from 'react';
import { useWebViewListener } from './useWebViewListener';
import { androidActions } from '../services/androidActions';

let configRequested = false;

export function useConfig() {
  const config = useWebViewListener('updateConfig');

  useEffect(() => {
    if (!configRequested && config === null) {
      configRequested = true;
      androidActions.updateConfig();
    }
  }, [config]);

  return config;
}
