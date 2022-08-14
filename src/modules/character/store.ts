import createContextStore from "src/libs/createContextStore";

export const CharacterStore = createContextStore({
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
  effects: {
    async setHealth() {
      return { type: 'setHealth', payload: { health: 5 } }
    }
  }
})