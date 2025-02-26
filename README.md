# Expect

```yml
name: Validation action

on: [push]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actalog/expect@v1
        with:
          type: regex
          value: example@example.com
          pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
```
