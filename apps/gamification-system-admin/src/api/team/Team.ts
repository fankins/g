import { Agent } from "../agent/Agent";
import { Score } from "../score/Score";

export type Team = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  points: number | null;
  name: string | null;
  agents?: Array<Agent>;
  scores?: Array<Score>;
};
