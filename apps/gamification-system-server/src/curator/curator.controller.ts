import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CuratorService } from "./curator.service";
import { CuratorControllerBase } from "./base/curator.controller.base";

@swagger.ApiTags("curators")
@common.Controller("curators")
export class CuratorController extends CuratorControllerBase {
  constructor(protected readonly service: CuratorService) {
    super(service);
  }
}
