import { MessageUpdateManyWithoutChatsInput } from "./MessageUpdateManyWithoutChatsInput";

export type ChatUpdateInput = {
  isGroupChat?: boolean | null;
  messages?: MessageUpdateManyWithoutChatsInput;
  title?: string | null;
};
