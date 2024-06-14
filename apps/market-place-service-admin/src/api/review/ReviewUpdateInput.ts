import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
  reviewer?: string | null;
};
