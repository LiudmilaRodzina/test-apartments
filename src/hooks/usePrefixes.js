import { useEffect } from 'react';
import { useWebViewListener } from './useWebViewListener';
import { androidActions } from '../services/androidActions';

let prefixesRequested = false;

export function usePrefixes() {
  const prefixes = useWebViewListener('updatePrefixes');

  useEffect(() => {
    if (!prefixesRequested && (!prefixes || prefixes.length === 0)) {
      prefixesRequested = true;
      androidActions.updatePrefixes();
    }
  }, [prefixes]);

  return prefixes;
}
