import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ScoreCreateInput = {
  score?: number | null;
  event?: EventWhereUniqueInput | null;
  team?: TeamWhereUniqueInput | null;
};
