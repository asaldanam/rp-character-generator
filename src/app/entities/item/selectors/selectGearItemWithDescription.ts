
import { getGearItemName } from "../helpers/getGearItemName";
import { getGearItemQuality } from "../helpers/getGearItemQuality";
import { getGearItemStatsWithValues } from "../helpers/getGearItemStatsWithValues";
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