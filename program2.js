const decodeTheRing = function (s, p) {

    // write your code hereclass Solution:
    const m = s.length;
    const n = p.length;
    
    // Initialize a DP table with false values
    const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));
    dp[0][0] = true; // Empty pattern matches empty string
    
    // Fill in the table for patterns starting with '*' to match empty prefixes of s
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }
    
    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '*') {
                // '*' can match zero or more characters
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
                // '?' matches one character, or characters match directly
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }
    
    // The answer is whether the entire message and pattern match
    return dp[m][n];
};

module.exports = decodeTheRing;

    


  };
  module.exports = decodeTheRing;
