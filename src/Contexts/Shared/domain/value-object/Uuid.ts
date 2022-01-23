import { InvalidArgumentError } from './InvalidArgumentError';
import validate from 'uuid-validate';
import { ValueObject } from './ValueObject';

export class Uuid extends ValueObject<string> {

  constructor(value: string) {
    super(value);
    // creamos la guarda para asegurarnos que sea un uuid o sino lance un error.
    this.ensureIsValidUuid(value);
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }
}
