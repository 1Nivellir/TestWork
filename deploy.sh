#!/usr/bin/env bash

set -e
npm install

npm run build

npm run preview
