import { Curator as TCurator } from "../api/curator/Curator";

export const CURATOR_TITLE_FIELD = "name";

export const CuratorTitle = (record: TCurator): string => {
  return record.name?.toString() || String(record.id);
};
