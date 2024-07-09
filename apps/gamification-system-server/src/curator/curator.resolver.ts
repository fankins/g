import * as graphql from "@nestjs/graphql";
import { CuratorResolverBase } from "./base/curator.resolver.base";
import { Curator } from "./base/Curator";
import { CuratorService } from "./curator.service";

@graphql.Resolver(() => Curator)
export class CuratorResolver extends CuratorResolverBase {
  constructor(protected readonly service: CuratorService) {
    super(service);
  }
}
