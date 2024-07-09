import { AgentCreateNestedManyWithoutTeamsInput } from "./AgentCreateNestedManyWithoutTeamsInput";
import { ScoreCreateNestedManyWithoutTeamsInput } from "./ScoreCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  points?: number | null;
  name?: string | null;
  agents?: AgentCreateNestedManyWithoutTeamsInput;
  scores?: ScoreCreateNestedManyWithoutTeamsInput;
};
