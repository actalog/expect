
const core = require('@actions/core')

try {
  const type = core.getInput('type')
  const value = core.getInput('value')

  if (type === 'regex') {
    const pattern = core.getInput('pattern')
    const valid = new RegExp(pattern)
      .test(value)

    if (!valid) {
      throw new Error('Invalid')
    }
  }
} catch (error) {
  core.setFailed(error.message);
}
