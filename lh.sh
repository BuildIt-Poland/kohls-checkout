#!/bin/bash

if [ "$TRAVIS_PULL_REQUEST" != "false" ] && [ "$TRAVIS_BRANCH" == "feature/lighthouse-ci" ]; then
  echo "test1"
  npm run lh
fi
