import { Stats } from "../types";
import { validateStat } from "./validateStat";

/** Valida un conjunto de estadísticas */
export function validateStats(stats: Stats) {
  Object.entries(stats).forEach(([stat, value]) => {
    validateStat(stat as keyof Stats, value as number);
  });
}
