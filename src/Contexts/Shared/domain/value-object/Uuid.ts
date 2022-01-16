import { InvalidArgumentError } from './InvalidArgumentError';
import validate from 'uuid-validate';

export class Uuid {
  readonly value: string;

  constructor(value: string) {
    // creamos la guarda para asegurarnos que sea un uuid o sino lance un error.
    this.ensureIsValidUuid(value);

    this.value = value;
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
    }
  }

  // este método nos sirve para cuando hagamos el console.log de este value-object, directamente nos muestre el valor.
  toString(): string {
    return this.value;
  }
}
