import { Team } from "../team/Team";

export type Agent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  team?: Team | null;
};
