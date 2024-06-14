export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  products?: Array<"Option1">;
  updatedAt: Date;
};
