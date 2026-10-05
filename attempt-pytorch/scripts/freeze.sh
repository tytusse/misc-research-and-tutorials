#!/usr/bin/env bash
set -euo pipefail

VENV_DIR="${VENV_DIR:-.venv}"
OUT="${OUT:-requirements.txt}"

# shellcheck disable=SC1090
source "${VENV_DIR}/bin/activate"

pip freeze > "${OUT}"
echo "Wrote ${OUT}"