import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type AgentUpdateInput = {
  name?: string | null;
  email?: string | null;
  team?: TeamWhereUniqueInput | null;
};
