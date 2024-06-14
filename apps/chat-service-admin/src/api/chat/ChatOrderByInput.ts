import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isGroupChat?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
