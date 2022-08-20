import { serializeGearItemSeed } from "../domain/serializeGearItemSeed";
import { ItemState } from "../types";

export function selectGearItemSeedSerialized(state: ItemState) {
  if (state.item?.type !== 'gear') return null;
  return serializeGearItemSeed(state.item);
}