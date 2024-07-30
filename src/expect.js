const core = require('@actions/core')

const { RequiredParamError } = require('./errors/required-param.error')
const { UnexpectedTypeError } = require('./errors/unexpected-type.error')
const { UnexpectedValueError } = require('./errors/unexpected-value.error')
const { validators } = require('./validators')

exports.expect = function (value, type) {
  const validator = validators[type]

  if (!validator) {
    throw new UnexpectedTypeError()
  }

  const params = validator.params.reduce((param, accumulator) => {
    const value = core.getInput(param)

    if (!value) {
      throw new RequiredParamError()
    }

    return {
      ...accumulator,
      [param]: value
    }
  }, {})

  const valid = new validator()
    .validate(value, params)

  if (!valid) {
    throw new UnexpectedValueError()
  }
}
