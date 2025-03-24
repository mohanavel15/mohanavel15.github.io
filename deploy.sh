#!/bin/bash

git checkout --orphan gh-pages
git rm -rf .
mv zig-out/* .
echo .zig-cache > .gitignore
echo zig-out >> .gitignore
git add .
git commit -m "deploy_to_gh-pages"
git checkout main