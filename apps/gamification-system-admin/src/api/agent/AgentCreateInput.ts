import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type AgentCreateInput = {
  name?: string | null;
  email?: string | null;
  team?: TeamWhereUniqueInput | null;
};
