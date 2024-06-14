import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StatusCreateNestedManyWithoutUsersInput } from "./StatusCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  password: string;
  profilePicture?: InputJsonValue;
  roles: InputJsonValue;
  statuses?: StatusCreateNestedManyWithoutUsersInput;
  username: string;
};
