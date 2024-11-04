function findSafestPath(dream) {
  const row = dream.length - 1
  const col = dream[0].length - 1

  let bestPath = Infinity

  const findBest = (r, c, sum) => {
    if (sum > bestPath) return
    if (r === row && c === col) {
      if (sum < bestPath) bestPath = sum
      return
    }
    if (r < row) {
      findBest(r + 1, c, sum + dream[r + 1][c])
    }
    if (c < col) {
      findBest(r, c + 1, sum + dream[r][c + 1])
    }
  }

  findBest(0, 0, dream[0][0])

  return bestPath
}

const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]

console.log('bestPath: ', findSafestPath(dream)) // Devuelve 7
// El mejor camino es:
// [0, 0] -> 1
// [0, 1] -> 3
// [0, 2] -> 1
// [1, 2] -> 1
// [2, 2] -> 1

// 1 -> 3 -> 1 -> 1 -> 1 = 7
