import { ICharacter } from './character';
import { IVoiceActor } from './voiceActor';

export interface ICharacterData {
    character: ICharacter;
    role: string;
    voice_actors: IVoiceActor[];
}
