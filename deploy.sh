#!/bin/bash

npm install

# Install the AWS CLI so we can publish to S3
# --upgrade option tells to upgrade any requirements that are already installed.
# --user option tells to install the program to a subdirectory of your user directory to avoid modifying
# libraries used by your operating system.
pip install awscli --upgrade --user
if [ $1 == 'styleguide' ]
then
  npx styleguidist build

  # Sync our build folder with our S3 bucket
  # --acl public-read says deploy the files with public read access
  # --delete says to delete files in the bucket that aren't present in the build folder
  aws s3 sync build/ "s3://buildit-store-styleguide" --acl public-read --delete
else
  npm run build

  aws s3 sync styleguide/ "s3://buildit-store" --acl public-read --delete
fi
