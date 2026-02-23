const SCREENS_URL = "ws://localhost:3000/screens";

let ws = null;
const callbacks = [];

export const connectSocket = () => {
  ws = new WebSocket(SCREENS_URL);

  ws.onopen = () => console.log("[Screens] connecte au socket");
  ws.onclose = () => console.log("[Screens] dfeco du socket");
  ws.onerror = (e) => console.error("[Screens] Erreur", e);

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    callbacks.forEach((cb) => cb(data));
  };
};

export const onScreenMessage = (callback) => {
  callbacks.push(callback);
};
