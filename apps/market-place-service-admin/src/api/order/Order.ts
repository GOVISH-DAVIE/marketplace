export type Order = {
  buyer: string | null;
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  seller: string | null;
  totalAmount: number | null;
  updatedAt: Date;
};
