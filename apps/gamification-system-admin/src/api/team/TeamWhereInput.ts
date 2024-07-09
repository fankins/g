import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentListRelationFilter } from "../agent/AgentListRelationFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";

export type TeamWhereInput = {
  id?: StringFilter;
  points?: IntNullableFilter;
  name?: StringNullableFilter;
  agents?: AgentListRelationFilter;
  scores?: ScoreListRelationFilter;
};
