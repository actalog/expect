import type { Validator } from '../interfaces/validator.interface'
import { EnumValidator } from './enum.validator'
import { RegexValidator } from './regex.validator'

export const validators: Record<string, { new(): Validator }> = {
  enum: EnumValidator,
  regex: RegexValidator,
}
