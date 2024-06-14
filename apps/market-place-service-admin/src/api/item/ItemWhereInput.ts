import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ItemWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  images?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
