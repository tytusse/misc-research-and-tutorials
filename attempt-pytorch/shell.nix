{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    python311
    python311Packages.pip
    python311Packages.virtualenv
    cudatoolkit
    linuxPackages.nvidia_x11
  ];

  shellHook = ''
    export LD_LIBRARY_PATH="/run/opengl-driver/lib:${LD_LIBRARY_PATH}"
    export LIBRARY_PATH="/run/opengl-driver/lib:${LIBRARY_PATH}"
    export CUDA_PATH="${pkgs.cudatoolkit}"
    export CUDA_HOME="${pkgs.cudatoolkit}"
  '';
}