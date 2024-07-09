import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ScoreWhereInput = {
  id?: StringFilter;
  score?: IntNullableFilter;
  event?: EventWhereUniqueInput;
  team?: TeamWhereUniqueInput;
};
