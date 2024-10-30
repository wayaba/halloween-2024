function cyberReindeer(road, time) {
  const output = [road]

  let lastChar = '.'
  for (let iteration = 1; iteration < time; iteration++) {
    if (iteration === 5) road = road.replaceAll('|', '*')

    const matches = road.match(/S[\*\.]/g)
    if (matches) {
      road = road.replace(matches[0], `${lastChar}S`)
      lastChar = matches[0][1]
    }
    output.push(road)
  }

  return output
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
console.log(cyberReindeer(road, time))

/* -> result:
[
1  'S..|...|..', // estado inicial
2  '.S.|...|..', // avanza el trineo la carretera
3  '..S|...|..', // avanza el trineo la carretera
4  '..S|...|..', // el trineo para en la barrera
5  '..S|...|..', // el trineo para en la barrera
6  '...S...*..', // se abre la barrera, el trineo avanza
7  '...*S..*..', // avanza el trineo la carretera
8  '...*.S.*..', // avanza el trineo la carretera
9  '...*..S*..', // avanza el trineo la carretera
10  '...*...S..', // avanza por la barrera abierta
]
*/
