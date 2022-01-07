#!/bin/env bash
ng build
docker buildx build --platform linux/arm/v7 -t macfurax/pf-remote:0.1 --push .