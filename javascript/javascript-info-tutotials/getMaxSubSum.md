`O( (n^2+n) / 2)` - sum of algebraic series of n elements (1, 2, 3, .. n).

`n^2 + n` is always even for n in N
If k is in N, and we use `n = 2k + 1` (or `2k-1` - pick one) then we have

`(2k+1)^2 + 2k + 1 = 4k^2 + 2k + 1 + 2k + 1 = 4k^2 + 4k +2 = 2*(2k^2 + 2k + 1) = 2*p` 
where p is in N - thus result is even.

`(2k-1)^2 + 2k-1 = 4k^2 - 2k + 1 + 2k - 1 = 4k^2 = 2*p` - again - even.  
