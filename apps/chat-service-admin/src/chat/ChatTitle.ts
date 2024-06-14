import { Chat as TChat } from "../api/chat/Chat";

export const CHAT_TITLE_FIELD = "title";

export const ChatTitle = (record: TChat): string => {
  return record.title?.toString() || String(record.id);
};
