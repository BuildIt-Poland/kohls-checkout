pip install awscli --upgrade --user
aws s3 sync build/ "s3://frontend-kohls" --acl public-read --delete