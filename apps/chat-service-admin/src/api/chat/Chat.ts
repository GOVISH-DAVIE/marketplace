import { Message } from "../message/Message";

export type Chat = {
  createdAt: Date;
  id: string;
  isGroupChat: boolean | null;
  messages?: Array<Message>;
  title: string | null;
  updatedAt: Date;
};
