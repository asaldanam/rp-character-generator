import { CharacterState } from "src/app/entities/character/types";

export interface CharacterService {
  save: (character: CharacterState) => Promise<void>
  load: (id: Pick<CharacterState, 'id'>) => Promise<CharacterState | null>
}