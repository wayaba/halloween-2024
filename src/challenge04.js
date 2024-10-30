function decode(message) {
  let prev = ''
  message.split('').forEach((char) => {
    if (char === ')') {
      let endIndex = prev.lastIndexOf('(')
      prev =
        prev.slice(0, endIndex) +
        prev
          .substring(endIndex + 1)
          .split('')
          .reverse()
          .join('')
    } else {
      prev += char
    }
  })
  return prev
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
