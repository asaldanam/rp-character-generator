import { STATS_INITIAL_STATE } from "./stats";

export type StatsState = typeof STATS_INITIAL_STATE;
export type Stats = Partial<StatsState['stats']>;
export type Stat = keyof Stats;
export type StatValue = number;