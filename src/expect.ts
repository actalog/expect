import * as core from '@actions/core'

import { RequiredParamError } from './errors/required-param.error'
import { UnexpectedTypeError } from './errors/unexpected-type.error'
import { UnexpectedValueError } from './errors/unexpected-value.error'
import { validators } from './validators'

export function expect (value, type) {
  const validator = validators[type]

  if (!validator) {
    throw new UnexpectedTypeError()
  }

  const params = validator.params.reduce((accumulator, param) => {
    const value = core.getInput(param)

    if (!value) {
      throw new RequiredParamError(value)
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
