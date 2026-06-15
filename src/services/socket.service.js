const WS_URL = import.meta.env.VITE_WS_URL || "ws://localhost:3000";

class SocketService {
  constructor() {
    this.screens = null;
    this.esp32 = null;
    this.screenListeners = [];
    this.esp32Listeners = [];
  }

  connect() {
    this.screens = new WebSocket(`${WS_URL}/screens`);
    this.screens.onopen = () => console.log("[Backglass Screens] connecté ✅");
    this.screens.onclose = () => console.log("[Backglass Screens] déconnecté");
    this.screens.onerror = (e) => console.error("[Backglass Screens] erreur", e);
    this.screens.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        this.screenListeners.forEach((cb) => cb(data));
      } catch (err) {
        console.error("[Backglass Screens] parsing error", err);
      }
    };

    this.esp32 = new WebSocket(`${WS_URL}/esp32`);
    this.esp32.onopen = () => console.log("[Backglass ESP32] connecté ✅");
    this.esp32.onclose = () => console.log("[Backglass ESP32] déconnecté");
    this.esp32.onerror = (e) => console.error("[Backglass ESP32] erreur", e);
    this.esp32.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        this.esp32Listeners.forEach((cb) => cb(data));
      } catch (err) {
        console.error("[Backglass ESP32] parsing error", err);
      }
    };
  }

  onScreenMessage(cb) {
    this.screenListeners.push(cb);
  }

  onEsp32Message(cb) {
    this.esp32Listeners.push(cb);
  }

  send(type, payload = {}) {
    if (this.screens?.readyState === WebSocket.OPEN) {
      this.screens.send(JSON.stringify({ type, ...payload }));
    } else {
      console.warn(`[Backglass Screens] non connecté, message ${type} ignoré`);
    }
  }

  disconnect() {
    this.screens?.close();
    this.esp32?.close();
    this.screenListeners = [];
    this.esp32Listeners = [];
  }
}

const socketService = new SocketService();
export default socketService;