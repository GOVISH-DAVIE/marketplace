import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatusCreateInput = {
  content?: string | null;
  user?: UserWhereUniqueInput | null;
};
