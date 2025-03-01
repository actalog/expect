import type { Validator } from '../interfaces/validator.interface'

export class EnumValidator implements Validator {
  public readonly params = [
    'options',
  ]

  public validate(value: string, params: Record<string, string>): boolean {
    return params
      .options
      .split(',')
      .includes(value)
  }
}
