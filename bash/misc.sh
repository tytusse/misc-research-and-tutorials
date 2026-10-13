#!/usr/bin/env bash

set -x
set -eou pipefail

SCRIPT_DIR=$(realpath $(dirname $0))


function simulateFail {
    return 1 # -> this is `falsy` in bash :)
}

if ! simulateFail; then
    : negated fail # <--- this is executed
else
    exit 1 # should not be here!
fi

if simulateFail; then
    exit 1 # should not be here!
else
    : plain fail # <--- this is executed
fi
