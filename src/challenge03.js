function findNaughtyStep(original, modified) {
  let compA = original.length > modified.length ? modified : original
  let compB = original.length > modified.length ? original : modified

  const differences = compB
    .split('')
    .filter((step, index) => compA[index] != step)
  return differences.length > 0 ? differences[0] : ''

  // const originalSteps = new Set(original)
  // for (const item of modified) {
  //   if (!originalSteps.has(item)) return item
  // }

  // const modifiedSteps = new Set(modified)
  // for (const item of original) {
  //   if (!modifiedSteps.has(item)) return item
  // }
  // return ''
}
console.log(findNaughtyStep('abcd', 'bcd')) // 'e'

console.log(findNaughtyStep('abcd', 'bacde')) // 'e'

console.log(findNaughtyStep('abcd', 'abcde')) // 'e'

console.log(findNaughtyStep('', 'abcde4')) // 'a'

console.log(findNaughtyStep('stepfor', 'stepor')) // 'f'

console.log(findNaughtyStep('abcde', 'abcde')) // ''

console.log(findNaughtyStep('abcde', '')) // 'a'

console.log(findNaughtyStep('', '')) // ''
