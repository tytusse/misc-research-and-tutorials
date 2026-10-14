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

if [[ "${I_AM_NOT_SET-empty_param}" = empty_param ]]; then
    : not set as expected
else
    : unexpected - unset value should not fall in here
    exit 1
fi

I_AM_EMPTY=""

if [[ "${I_AM_EMPTY-empty_param}" = empty_param ]]; then
    : unexpected - empty should not pass here
    exit 1
else
    : expected: empty is still good
fi
