export interface Validator {
  params: string[]
  validate (value: string, params: Record<string, string>): boolean
}
