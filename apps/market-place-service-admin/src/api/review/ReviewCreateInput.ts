import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  product?: ProductWhereUniqueInput | null;
  rating?: number | null;
  reviewer?: string | null;
};
