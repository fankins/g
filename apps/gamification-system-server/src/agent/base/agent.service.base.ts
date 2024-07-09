/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Agent as PrismaAgent,
  Team as PrismaTeam,
} from "@prisma/client";

export class AgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AgentCountArgs, "select">): Promise<number> {
    return this.prisma.agent.count(args);
  }

  async agents(args: Prisma.AgentFindManyArgs): Promise<PrismaAgent[]> {
    return this.prisma.agent.findMany(args);
  }
  async agent(args: Prisma.AgentFindUniqueArgs): Promise<PrismaAgent | null> {
    return this.prisma.agent.findUnique(args);
  }
  async createAgent(args: Prisma.AgentCreateArgs): Promise<PrismaAgent> {
    return this.prisma.agent.create(args);
  }
  async updateAgent(args: Prisma.AgentUpdateArgs): Promise<PrismaAgent> {
    return this.prisma.agent.update(args);
  }
  async deleteAgent(args: Prisma.AgentDeleteArgs): Promise<PrismaAgent> {
    return this.prisma.agent.delete(args);
  }

  async getTeam(parentId: string): Promise<PrismaTeam | null> {
    return this.prisma.agent
      .findUnique({
        where: { id: parentId },
      })
      .team();
  }
}
