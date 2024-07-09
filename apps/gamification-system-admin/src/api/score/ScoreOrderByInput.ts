import { SortOrder } from "../../util/SortOrder";

export type ScoreOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  score?: SortOrder;
  eventId?: SortOrder;
  teamId?: SortOrder;
};
