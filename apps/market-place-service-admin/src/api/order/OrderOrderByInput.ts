import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  buyer?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  seller?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
