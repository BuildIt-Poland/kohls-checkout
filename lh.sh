#!/bin/bash

if [ "$TRAVIS_PULL_REQUEST" != "false" ] && [ "$TRAVIS_BRANCH" == "feature/lighthouse-ci" ]; then
  npm run lh
fi
