import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
  ownerProfile?: SortOrder;
  updatedAt?: SortOrder;
};
