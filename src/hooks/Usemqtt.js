import { useEffect } from "react";
import mqtt from "mqtt";

export function useMqttBackglass() {
  useEffect(() => {
    const client = mqtt.connect("ws://localhost:9001", {
      username: "arthur",
      password: "1234",
    });

    client.on("connect", () => {
      console.log("[Backglass] MQTT connected");
      client.subscribe("pinball/flippers", (err) => {
        if (err) {
          console.error("❌ [Backglass] Subscribe error", err);
        } else {
          console.log("📡 [Backglass] Listening pinball/flippers");
        }
      });
    });

    client.on("message", (_, message) => {
      const payload = message.toString();
      console.log("[Backglass] MQTT:", payload);

      if (payload.endsWith("_DOWN") || payload.startsWith("LAUNCH_UP:")) {
        window.dispatchEvent(new CustomEvent("bg:any-button"));
      }

      switch (payload) {
        case "LEFT_DOWN":
          window.dispatchEvent(new CustomEvent("bg:left-down"));
          break;
        case "RIGHT_DOWN":
          window.dispatchEvent(new CustomEvent("bg:right-down"));
          break;
        case "FRONT_GREEN_DOWN":
          window.dispatchEvent(new CustomEvent("bg:green-down"));
          break;
        case "FRONT_RED_DOWN":
          window.dispatchEvent(new CustomEvent("bg:red-down"));
          break;
        default:
          break;
      }
    });

    client.on("error", (err) => {
      console.error(" [Backglass] MQTT error", err);
    });

    return () => {
      client.end();
    };
  }, []);
}
