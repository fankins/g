import { CuratorWhereInput } from "./CuratorWhereInput";
import { CuratorOrderByInput } from "./CuratorOrderByInput";

export type CuratorFindManyArgs = {
  where?: CuratorWhereInput;
  orderBy?: Array<CuratorOrderByInput>;
  skip?: number;
  take?: number;
};
