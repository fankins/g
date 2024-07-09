import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ScoreListRelationFilter } from "../score/ScoreListRelationFilter";

export type EventWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  scores?: ScoreListRelationFilter;
};
