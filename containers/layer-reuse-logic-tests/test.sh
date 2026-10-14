#!/usr/bin/env bash

set -x
set -eou pipefail

SCRIPT_DIR=$(realpath $(dirname $0))

IMAGE_1="test-layers-1"
IMAGE_2="test-layers-2"
podman image rm -i $IMAGE_1
podman image rm -i $IMAGE_2

podman image build -t=$IMAGE_1 . -f One.Dockerfile
podman image build -t=$IMAGE_2 . -f Two.Dockerfile
