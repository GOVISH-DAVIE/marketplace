import { Product } from "../product/Product";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  product?: Product | null;
  rating: number | null;
  reviewer: string | null;
  updatedAt: Date;
};
