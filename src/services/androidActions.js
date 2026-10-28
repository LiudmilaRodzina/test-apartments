/* global Android */
export const androidActions = {
  makeCall: (target, prefix) => {
    Android.sendAction(JSON.stringify({ action: 'makeCall', target, prefix }));
  },
  hangupCall: () => {
    Android.sendAction(JSON.stringify({ action: 'hangupCall' }));
  },
  openByCode: (code) => {
    Android.sendAction(JSON.stringify({ action: 'openByCode', code }));
  },
  updateConfig: () => {
    Android.sendAction(JSON.stringify({ action: 'onUpdateConfig' }));
  },
  updatePrefixes: () => {
    Android.sendAction(JSON.stringify({ action: 'onUpdatePrefixes' }));
  },
  buttonPressed: (source) => {
    Android.sendAction(JSON.stringify({ action: 'onButtonPressed', source }));
  },
};
