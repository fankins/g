import { AgentUpdateManyWithoutTeamsInput } from "./AgentUpdateManyWithoutTeamsInput";
import { ScoreUpdateManyWithoutTeamsInput } from "./ScoreUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  points?: number | null;
  name?: string | null;
  agents?: AgentUpdateManyWithoutTeamsInput;
  scores?: ScoreUpdateManyWithoutTeamsInput;
};
