function escapePyramidHead(room) {
  const findPosition = (target) => {
    const rowIndex = room.findIndex((row) => row.includes(target))
    if (rowIndex !== -1) {
      const columnIndex = room[rowIndex].indexOf(target)
      return { x: rowIndex, y: columnIndex }
    } else {
      return { x: -1, y: -1 }
    }
  }

  const maxRow = room.length - 1
  const maxCol = room[0].length - 1
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]

  const findPath = (fromPosition, toPosition, steps, visited) => {
    if (
      fromPosition.x < 0 ||
      fromPosition.x > maxRow ||
      fromPosition.y < 0 ||
      fromPosition.y > maxCol ||
      room[fromPosition.x][fromPosition.y] === '#' ||
      visited.has(`${fromPosition.x},${fromPosition.y}`)
    ) {
      return Infinity
    }

    if (fromPosition.x === toPosition.x && fromPosition.y === toPosition.y) {
      return steps
    }

    visited.add(`${fromPosition.x},${fromPosition.y}`)

    let minSteps = Infinity
    for (const [dr, dc] of directions) {
      const newRow = fromPosition.x + dr
      const newCol = fromPosition.y + dc
      minSteps = Math.min(
        minSteps,
        findPath({ x: newRow, y: newCol }, toPosition, steps + 1, visited)
      )
    }

    return minSteps
  }

  const result = findPath(findPosition('▲'), findPosition('T'), 0, new Set())
  return result === Infinity ? -1 : result
}

const room = [
  ['.', '.', '#', '.', '▲'],
  ['#', '.', '#', '.', '#'],
  ['.', '.', '.', '.', '.'],
  ['#', '#', '#', '.', '#'],
  ['T', '.', '.', '.', '.']
]

console.log(escapePyramidHead(room)) // -> 8

const room2 = [
  ['T', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['▲', '.', '.', '#'],
  ['.', '#', '#', '#']
]

console.log(escapePyramidHead(room2)) // -> 2

const room3 = [
  ['#', '#', '#'],
  ['▲', '.', '#'],
  ['.', '#', 'T']
]

console.log(escapePyramidHead(room3)) // -> -1
