import { Score } from "../score/Score";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  date: Date | null;
  scores?: Array<Score>;
};
