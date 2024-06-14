import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatusWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
