import { Module } from "@nestjs/common";
import { CuratorModuleBase } from "./base/curator.module.base";
import { CuratorService } from "./curator.service";
import { CuratorController } from "./curator.controller";
import { CuratorResolver } from "./curator.resolver";

@Module({
  imports: [CuratorModuleBase],
  controllers: [CuratorController],
  providers: [CuratorService, CuratorResolver],
  exports: [CuratorService],
})
export class CuratorModule {}
