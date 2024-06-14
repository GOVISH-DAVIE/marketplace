import { Message } from "../message/Message";
import { JsonValue } from "type-fest";
import { Status } from "../status/Status";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  messages?: Array<Message>;
  profilePicture: JsonValue;
  roles: JsonValue;
  statuses?: Array<Status>;
  updatedAt: Date;
  username: string;
};
