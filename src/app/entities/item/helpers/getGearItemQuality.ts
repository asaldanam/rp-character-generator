import { GEAR_ITEM_COLOR_BY_QUALITY } from "../config";
import { GearItem } from "../types";

export function getGearItemQuality({stats}: GearItem) {
  const statsCount = stats.length;
  const quality = GEAR_ITEM_COLOR_BY_QUALITY[statsCount];
  return quality;
}