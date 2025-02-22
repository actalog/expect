import * as core from '@actions/core'

import { expect } from './expect'

try {
  const type = core.getInput('type')
  const value = core.getInput('value')

  expect(value, type)
} catch (error) {
  core.setFailed(error.message);
}
