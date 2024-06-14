import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StatusUpdateManyWithoutUsersInput } from "./StatusUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageUpdateManyWithoutUsersInput;
  password?: string;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  statuses?: StatusUpdateManyWithoutUsersInput;
  username?: string;
};
