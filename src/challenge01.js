function createMagicPotion(potions, target) {
  const possibleOutput = []
  potions.forEach((firstPotion, i) => {
    const subArray = potions.slice(i + 1)
    subArray.forEach((secondPotion, j) => {
      if (firstPotion + secondPotion === target)
        possibleOutput.push({ arr: [i, j + i + 1], dist: j + i + 1 - i })
    })
  })

  const [output] = possibleOutput.sort((a, b) => a.dist - b.dist)
  return output ? output.arr : undefined
}

const potions = [4, 5, 6, 2]
const goal = 8

createMagicPotion(potions, goal) // [2, 3]

const potions2 = [1, 2, 3, 4]
const goal2 = 9

createMagicPotion(potions2, goal2) // undefined

const potions3 = [1, 2, 3, 4]
const goal3 = 5

console.log(createMagicPotion(potions3, goal3)) // [1, 2]
// también podría ser [0, 3] pero hay una combinación antes
