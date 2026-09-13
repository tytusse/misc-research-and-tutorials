function pow(x, n) {
  if(n<0) return pow(x, n+1) / x;
  if(n>0) return pow(x, n-1) * x;
  return 1;
}
