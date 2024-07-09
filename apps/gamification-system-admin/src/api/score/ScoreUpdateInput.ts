import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type ScoreUpdateInput = {
  score?: number | null;
  event?: EventWhereUniqueInput | null;
  team?: TeamWhereUniqueInput | null;
};
