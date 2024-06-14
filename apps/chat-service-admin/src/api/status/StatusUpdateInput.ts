import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatusUpdateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
