import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StatusListRelationFilter } from "../status/StatusListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  messages?: MessageListRelationFilter;
  profilePicture?: JsonFilter;
  statuses?: StatusListRelationFilter;
  username?: StringFilter;
};
