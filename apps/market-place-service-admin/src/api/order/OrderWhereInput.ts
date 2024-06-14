import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  buyer?: StringNullableFilter;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  seller?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
};
