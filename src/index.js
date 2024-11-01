const core = require('@actions/core')

const { expect } = require('./expect')

try {
  const type = core.getInput('type')
  const value = core.getInput('value')

  expect(value, type)
} catch (error) {
  core.setFailed(error.message);
}
