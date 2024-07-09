import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CuratorServiceBase } from "./base/curator.service.base";

@Injectable()
export class CuratorService extends CuratorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
