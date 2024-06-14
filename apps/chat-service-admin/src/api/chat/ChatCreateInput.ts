import { MessageCreateNestedManyWithoutChatsInput } from "./MessageCreateNestedManyWithoutChatsInput";

export type ChatCreateInput = {
  isGroupChat?: boolean | null;
  messages?: MessageCreateNestedManyWithoutChatsInput;
  title?: string | null;
};
