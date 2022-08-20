
import { getGearItemName } from "../domain/getGearItemName";
import { getGearItemQuality } from "../domain/getGearItemQuality";
import { getGearItemStatsWithValues } from "../domain/getGearItemStatsWithValues";
import { ItemState } from "../types";

export function selectGearItemWithDescription(state: ItemState) {
  const item = state.item;
  if (item?.type !== 'gear') return null;

  return {
    ...item,
    quality: getGearItemQuality(item),
    name: getGearItemName(item),
    stats: getGearItemStatsWithValues(item)
  }
}