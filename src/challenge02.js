function battleHorde(zombies, humans) {
  let h = 0
  let z = 0
  for (let i = 0; i < zombies.length; i++) {
    const battleResult = z + Number(zombies[i]) - (h + Number(humans[i]))
    z = h = 0
    if (battleResult !== 0) {
      battleResult > 0 ? (z = battleResult) : (h = Math.abs(battleResult))
    }
  }
  if (z === h) return 'x'
  return z > h ? z.toString() + 'z' : h.toString() + 'h'
}

console.log(battleHorde('321', '123')) // -> "x"

console.log(battleHorde('4598', '7682')) // -> "3z"

console.log(battleHorde('242', '334')) // -> "2h"
// primera ronda: zombie 2 vs human 3 -> humano gana (+1)
// segunda ronda: zombie 4 vs human 3+1 -> empate
// tercera ronda: zombie 2 vs human 4 -> humano gana (+2)
// resultado: "2h"

console.log(battleHorde('444', '282')) // -> "x"
// primera ronda: zombie 4 vs human 2 -> zombie gana (+2)
// segunda ronda: zombie 4+2 vs human 8 -> humano gana (+2)
// tercera ronda: zombie 4 vs human 2+2 -> empate
// resultado: "x"
