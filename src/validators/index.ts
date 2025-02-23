import { Validator } from '../interfaces/validator.interface'
import { RegexValidator } from './regex.validator'

export const validators: Record<string, { new(): Validator }> = {
  regex: RegexValidator
}
