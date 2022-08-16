import { CHARACTER_INITIAL_STATE } from "./character";

export type ICharacter = typeof CHARACTER_INITIAL_STATE;
export type Stats = Partial<ICharacter['stats']>;
export type Stat = keyof Stats;
export type StatValue = number;