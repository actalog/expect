exports.RequiredParamError = class extends Error {
  /**
   * @param {String} param 
   */
  constructor (param) {
    super(`Param ${param} is required`)
  }
}
