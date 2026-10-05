#!/usr/bin/env bash
set -euo pipefail

PYTHON_BIN="${PYTHON_BIN:-python}"
VENV_DIR="${VENV_DIR:-.venv}"
TORCH_CUDA_CHANNEL="${TORCH_CUDA_CHANNEL:-cu132}"  # or cu124
TORCH_INDEX_URL="https://download.pytorch.org/whl/${TORCH_CUDA_CHANNEL}"

echo "[1/5] Creating virtual environment at ${VENV_DIR} (if missing)"
if [[ ! -d "${VENV_DIR}" ]]; then
  "${PYTHON_BIN}" -m venv "${VENV_DIR}"
fi

# shellcheck disable=SC1090
source "${VENV_DIR}/bin/activate"

echo "[2/5] Upgrading base packaging tools"
python -m pip install --upgrade pip setuptools wheel

echo "[3/5] Installing PyTorch from ${TORCH_INDEX_URL}"
pip install --index-url "${TORCH_INDEX_URL}" torch torchvision 
# pip install --index-url "${TORCH_INDEX_URL}" torch torchvision torchaudio

echo "[4/5] Installing remaining requirements (if file exists)"
if [[ -f requirements.txt ]]; then
  pip install -r requirements.txt
elif [[ -f requirements.in ]]; then
  # simple mode: install directly from requirements.in
  pip install -r requirements.in
fi

echo "[5/5] Verifying CUDA visibility in torch"
python - <<'PY'
import torch
print("torch:", torch.__version__)
print("cuda available:", torch.cuda.is_available())
print("torch cuda build:", torch.version.cuda)
if torch.cuda.is_available():
    print("gpu:", torch.cuda.get_device_name(0))
PY

echo "Done."
echo "Tip: activate later with: source ${VENV_DIR}/bin/activate"