import { MotherCreator } from './MotherCreator';

export class WordMother {
  static random({ minLength = 0, maxLength }: { minLength?: number; maxLength: number }): string {
    const length = Math.floor(Math.random() * (maxLength - minLength)) + minLength;
    const data = MotherCreator.random().lorem.word(length);
    return data || 'default name';
  }
}
