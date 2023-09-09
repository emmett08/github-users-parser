#!/bin/bash

set -e

# npm test

npm run gh:build

# npm token create --read-only

npm publish

npm install -g github-users-parser
