import { createEntity } from "../helpers/createEntity"
import { CALC_FNS, CHARACTER_STATS_INITIAL } from "./config";
import { validateStat } from "./helpers";
import { ICharacter, StatValue } from "./types";

export const CHARACTER_INITIAL_STATE = {
  id: '',
  info: {
    name: '',
    title: '',
    avatar: '',
  },
  condition: {
    health: CALC_FNS.healthBase(1),
    barrier: 0,
  },
  gear: {},
  stats: {
    ...CHARACTER_STATS_INITIAL,
  },
}

export const Character = createEntity({
  name: 'Character',
  initialState: CHARACTER_INITIAL_STATE,
  reducers: {
    init(_, payload: ICharacter) {
      return payload;
    },
    updateHealth(state, payload: { health: number }) {
      const draft = { ...state };
      const max = CALC_FNS.healthBase(draft.stats.attr_vitality);
      const health = payload.health >= max ? max : payload.health;
      draft.condition.health = health >= 0 ? health : 0;
      return draft;
    },
    updateStat(state, payload: { stat: keyof ICharacter['stats'], value: StatValue }) {
      const draft = { ...state };
      const { isValid } = validateStat(payload.stat, payload.value);
      if (isValid) draft.stats[payload.stat] = payload.value;
      return draft;
    },
    updateInfo(state, payload: Partial<ICharacter['info']>) {
      const draft = { ...state };
      draft.info = { ...draft.info, ...payload };
      return draft;
    },
  },
})
