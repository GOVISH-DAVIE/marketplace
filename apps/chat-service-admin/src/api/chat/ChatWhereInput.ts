import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChatWhereInput = {
  id?: StringFilter;
  isGroupChat?: BooleanNullableFilter;
  messages?: MessageListRelationFilter;
  title?: StringNullableFilter;
};
