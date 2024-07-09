import { Event } from "../event/Event";
import { Team } from "../team/Team";

export type Score = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  score: number | null;
  event?: Event | null;
  team?: Team | null;
};
