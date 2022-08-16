import { createEntity } from "../helpers/createEntity"
import { uuid } from "../helpers/uuid";
import { CALC_FNS, CHARACTER_STATS_INITIAL } from "./config";
import { validateStat } from "./helpers";
import { ICharacter, StatValue } from "./types";

export const CHARACTER_INITIAL_STATE = {
  id: uuid(),
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
    updateHealth(character, payload: { health: number }) {
      const max = CALC_FNS.healthBase(character.stats.attr_vitality);
      const health = payload.health >= max ? max : payload.health;
      character.condition.health = health >= 0 ? health : 0;
      return character;
    },
    updateStat(character, payload: { stat: keyof ICharacter['stats'], value: StatValue }) {
      const { isValid } = validateStat(payload.stat, payload.value);
      if (isValid) character.stats[payload.stat] = payload.value;
      return character;
    },
    updateInfo(character, payload: Partial<ICharacter['info']>) {
      character.info = { ...character.info, ...payload };
      return character;
    },
  },
})
