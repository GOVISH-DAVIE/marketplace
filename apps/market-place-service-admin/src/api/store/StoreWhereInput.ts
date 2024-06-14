import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StoreWhereInput = {
  address?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  ownerProfile?: StringNullableFilter;
};
