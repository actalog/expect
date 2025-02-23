import { Validator } from '../interfaces/validator.interface'

export class RegexValidator implements Validator {
  public readonly params = [
    'pattern'
  ]

  public validate (value: string, params: Record<string, string>): boolean {
    return new RegExp(params.pattern)
      .test(value)
  }
}
