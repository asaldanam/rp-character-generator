import { GEAR_ITEM_STATS_BY_QUALITY } from "../config";
import { GearItem } from "../types";

export function getGearItemStatsWithValues({ stats }: GearItem) {
  const statsCount = stats.length;
  const values = GEAR_ITEM_STATS_BY_QUALITY[statsCount];
  
  return values.reduce((statsObj, value, index: number) => {
    const stat = stats[index];
    return { ...statsObj, [stat]: value}
  }, {})
}