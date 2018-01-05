#!/usr/bin/env bash

PUBLIC_URL=/valtmarval yarn run build
rm -rf docs
mv build docs
