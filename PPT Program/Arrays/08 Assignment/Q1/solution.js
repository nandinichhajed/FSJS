function minimumDeleteSum(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    dp[i][m] = dp[i + 1][m] + s1.charCodeAt(i);
  }

  for (let j = m - 1; j >= 0; j--) {
    dp[n][j] = dp[n][j + 1] + s2.charCodeAt(j);
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      if (s1[i] === s2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.min(
          dp[i + 1][j] + s1.charCodeAt(i),
          dp[i][j + 1] + s2.charCodeAt(j)
        );
      }
    }
  }

  return dp[0][0];
}