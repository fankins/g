import { ScoreCreateNestedManyWithoutEventsInput } from "./ScoreCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
  scores?: ScoreCreateNestedManyWithoutEventsInput;
};
