import { StatValue } from './types';
import { CALC_FNS, STATS_CONFIG } from './config';
import { StatsState } from './types';
import { createDraft } from 'src/app/helpers/createDraft';
import { validateStat } from './helpers/validateStat';

export const STATS_INITIAL_STATE = {
  condition: {
    health: CALC_FNS.healthBase(1),
    barrier: 0,
  },
  stats: Object.entries(STATS_CONFIG).reduce((stats, [stat, config]) => {
    return { ...stats, [stat]: 1 }
  }, {} as { [key in keyof typeof STATS_CONFIG]: number }),
}

export const Stats = {
  initialState: STATS_INITIAL_STATE,
  reducers: {
    updateStat(state: StatsState, payload: { stat: keyof StatsState['stats'], value: StatValue }) {
      const draft = createDraft(state);
      const { isValid } = validateStat(payload.stat, payload.value);
      if (isValid) draft.stats[payload.stat] = payload.value;
      return draft;
    },
    updateHealth(state: StatsState, payload: { health: number }) {
      const draft = createDraft(state);
      const max = CALC_FNS.healthBase(draft.stats.attr_vitality);
      const health = payload.health >= max ? max : payload.health;
      draft.condition.health = health >= 0 ? health : 0;
      return draft;
    },
  },
}
