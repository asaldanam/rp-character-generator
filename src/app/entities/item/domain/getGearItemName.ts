import { GEAR_ITEM_NAME_BY_SLOT_TABLE, GEAR_ITEM_NAME_BY_STATS_TABLE, GEAR_ITEM_SLOT_SUBTYPES } from "../config";
import { GearItem } from "../types";

export function getGearItemName({stats, slot, slotSubtype}: GearItem) {
  const subtypeBaseName = GEAR_ITEM_SLOT_SUBTYPES[slotSubtype || '']?.text.es;
  const slotBaseName = GEAR_ITEM_NAME_BY_SLOT_TABLE[slot].es;
  const name = {
    base: subtypeBaseName || slotBaseName,
    main: GEAR_ITEM_NAME_BY_STATS_TABLE[stats[0]]?.main?.es || '',
    sec: GEAR_ITEM_NAME_BY_STATS_TABLE[stats[1]]?.sec?.es || '',
    alt: GEAR_ITEM_NAME_BY_STATS_TABLE[stats[2]]?.alt?.es || '',
  }
  return name.base + ' ' + name.main + (name.sec ? ' ' : '') + name.sec + (name.alt ? ' ' : '') + name.alt;
}