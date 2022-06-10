#!/usr/bin/env sh
set -e
yarn run build
cd dist
echo 'www.ssibrahimbas.com' > CNAME
git add -A
git commit -m 'deploy'
git push -f git@github.com:ssibrahimbas/sisbrahimbas.github.io.git master:gh-pages
cd -