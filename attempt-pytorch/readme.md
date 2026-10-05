## Setup (NixOS + NVIDIA + PyTorch)

### 1. Enter dev shell
```bash
nix-shell
```

### 2. Bootstrap Python env
```bash
./scripts/bootstrap.sh
```

Optional CUDA wheel channel:
```bash
TORCH_CUDA_CHANNEL=cu124 ./scripts/bootstrap.sh
```

### 3. Run code
```bash
./scripts/run.sh train.py
```

### 4. Update lock file after dependency changes
```bash
./scripts/freeze.sh
```