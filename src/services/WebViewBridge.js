export class WebViewBridge {
  static listeners = new Map();
  static lastConfigData = null;
  static lastPrefixes = null;

  static onCallEvent(data) {
    this._notifyListeners('callEvent', data);
  }

  static onRegistrationEvent(data) {
    this._notifyListeners('registrationEvent', data);
  }

  static onNotificationEvent(data) {
    this._notifyListeners('notificationEvent', data);
  }

  static onDataReceived(data) {
    this._notifyListeners('data', data);
  }

  static onUpdateConfig(data) {
    this.lastConfigData = data;
    this._notifyListeners('updateConfig', data);
  }

  static onUpdatePrefixes(data) {
    this.lastPrefixes = data;
    this._notifyListeners('updatePrefixes', data);
  }

  static _notifyListeners(eventType, data) {
    const listeners = this.listeners.get(eventType);
    if (listeners) {
      listeners.forEach((callback) => callback(data));
    }
  }

  static subscribe(eventType, callback) {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, new Set());
    }
    this.listeners.get(eventType).add(callback);

    if (eventType === 'updateConfig' && this.lastConfigData !== null) {
      callback(this.lastConfigData);
    }

    if (eventType === 'updatePrefixes' && this.lastPrefixes !== null) {
      callback(this.lastPrefixes);
    }

    return () => {
      const listeners = this.listeners.get(eventType);
      if (listeners) {
        listeners.delete(callback);
      }
    };
  }
}

if (typeof window !== 'undefined') {
  window.WebViewBridge = WebViewBridge;
}
