# github-users-parser

`github-users-parser` is an Antlr4 generated GITHUB_USERS parser. This module helps in parsing and working with GitHub user information.

## Features

- Uses ANTLR4 for parsing.
- Provides both visitor (`DefaultVisitor`) and utility functions (`GetGitHubHandlesByEmail`) for handling GitHub user information.

## Installation

```bash
npm install github-users-parser
```

## Usage

### Import and use the package

```typescript
import { DefaultVisitor, GetGitHubHandlesByEmail } from 'github-users-parser';

const result = GetGitHubHandlesByEmail("input-string", ["sample@email.com"]);

const visitor = new DefaultVisitor(["sample@email.com"]);
```

## API

### `GetGitHubHandlesByEmail(input: string, emailAddresses: string[]): string[]`

Given an input string and an array of email addresses, this function returns the associated GitHub handles.

### `DefaultVisitor`

A class to visit and process GitHub user information.

## Development

### Building the project

To build the project, run:

```bash
npm run co:build
```

### Generating parser and lexer using antlr4ts

To generate the parser and lexer:

```bash
npm run co:antlr4ts
```

## Issues

If you encounter any bugs or issues, kindly report them [here](https://github.com/emmett08/github-codeowners-parser/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
