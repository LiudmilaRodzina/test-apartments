import { useEffect } from 'react';
import { useWebViewListener } from './useWebViewListener';
import { androidActions } from '../services/androidActions';

export function useCall(target, onCancel) {
  const event = useWebViewListener('callEvent');

  useEffect(() => {
    if (target) {
      try {
        androidActions.makeCall(target.dialed, target.prefix);
      } catch (error) {
        console.error('Call error:', error);
      }
    }
  }, [target]);

  useEffect(() => {
    if (!event) return;

    const state = event?.state;

    if (state === 'End' || state === 'Released') {
      setTimeout(() => onCancel?.(), 1000);
    }
  }, [event, onCancel]);

  const hangup = () => {
    try {
      androidActions.hangupCall();
    } catch (error) {
      console.error('Hangup error:', error);
    }
  };

  return { callEvent: event?.state, hangup };
}
