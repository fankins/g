import { ScoreUpdateManyWithoutEventsInput } from "./ScoreUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
  scores?: ScoreUpdateManyWithoutEventsInput;
};
