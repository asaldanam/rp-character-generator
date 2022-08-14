import { createEntity } from "../core/createEntity"

export const Character = createEntity({
  name: 'Character',
  initialState: {
    condition: {
      health: 0,
      barrier: 0,
    },
  },
  reducers: {
    setHealth(character, payload: { health: number }) {
      character.condition.health = payload.health;
      return character;
    },
  },
})