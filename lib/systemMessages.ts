import { get } from "@vercel/edge-config";

async function systemMessages() {
  return await get("system_messages");
}

const Messages = systemMessages();