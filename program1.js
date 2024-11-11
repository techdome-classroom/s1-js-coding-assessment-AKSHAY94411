const getTotalIsles = function (grid) {


  // write your code here
    // Edge case: empty grid
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    // Helper function for DFS traversal
    const dfs = (i, j) => {
        // Base case: check bounds and if cell is water
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W') return;

        // Mark the cell as visited by setting it to 'W'
        grid[i][j] = 'W';

        // Explore the neighboring cells (up, down, left, right)
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    };

    // Traverse each cell in the grid
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If the cell is land, start a new DFS
            if (grid[i][j] === 'L') {
                islandCount++;
                dfs(i, j);
            }
        }
    }

    return islandCount;
};

module.exports = decodeTheRing;


};

module.exports = getTotalIsles;
