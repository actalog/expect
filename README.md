# @actalog/expect

[![CI](https://github.com/actalog/expect/actions/workflows/ci.yml/badge.svg)](https://github.com/actalog/expect/actions/workflows/ci.yml)
[![CD](https://github.com/actalog/expect/actions/workflows/cd.yml/badge.svg)](https://github.com/actalog/expect/actions/workflows/cd.yml)

A lightweight and flexible set of validators for GitHub Actions. Ensure your inputs, secrets, and outputs meet specific criteria before proceeding with your workflow, preventing unexpected errors downstream.

---

## 🚀 Features

- **✅ Regex Validation**: Powerful pattern matching for complex string formats like emails, versions, or custom identifiers.
- **📋 Enum Validation**: Restrict values to a specific set of allowed options, ideal for environment names, deployment targets, etc.
- **🛡️ Fail Fast**: Stop workflows immediately when validation fails, saving time and resources.

## 📖 Usage

### Regex Validation

Perfect for validating string formats like email addresses, phone numbers, or semantic versions.

```yaml
name: Regex Validation Example

on:
  workflow_dispatch:
    inputs:
      email:
        description: Email to validate
        required: true

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Validate Email
        uses: actalog/expect@v1
        with:
          type: regex
          value: ${{ github.event.inputs.email }}
          pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
```

### Enum Validation

Useful for ensuring that a value belongs to a predefined list of valid options.

```yaml
name: Enum Validation Example

on:
  workflow_dispatch:
    inputs:
      environment:
        description: Environment to deploy
        required: true

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - name: Validate Environment
        uses: actalog/expect@v1
        with:
          type: enum
          value: ${{ github.event.inputs.environment }}
          options: 'staging,production,beta'
```

## 🛠️ Inputs

| Input     | Description                                                              | Required |
| :-------- | :----------------------------------------------------------------------- | :------: |
| `type`    | The validator to use. Supported: `regex`, `enum`.                        |  **Yes** |
| `value`   | The string value to be validated.                                        |  **Yes** |
| `pattern` | The regular expression pattern (required if `type` is `regex`).          |    No    |
| `options` | A comma-separated list of allowed values (required if `type` is `enum`). |    No    |

## 💻 Development

### Setup

```bash
npm install
```

### Building

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 📄 License

This project is released into the public domain under the [Unlicense](LICENSE).
