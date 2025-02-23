export class RequiredParamError extends Error {
  constructor(param: string) {
    super(`Param ${param} is required`)
  }
}
