import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type AgentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  team?: TeamWhereUniqueInput;
};
