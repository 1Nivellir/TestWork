#!/usr/bin/env bash

set -e

npm run build

cd dist

git init

git add .

git commit -m "deploy"

git push -f https://github.com/1Nivellir/posts.git master:gh-pages

cd -
