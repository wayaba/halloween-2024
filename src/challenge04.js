function findTheKiller(whisper, suspects) {
  suspects = suspects.filter((suspect) => suspect.length >= whisper.length - 1)
  for (let i = 0; i < whisper.length; i++) {
    if (whisper[i] === '~') continue
    if (whisper[i] === '$') {
      suspects = suspects.filter(
        (suspect) => suspect.length === whisper.length - 1
      )
      continue
    }
    suspects = suspects.filter(
      (suspect) => suspect[i].toLowerCase() === whisper[i]
    )
  }

  return suspects.join(',')
}

const whisper = 'd~~~~~a'
const suspects = [
  'Dracula',
  'Freddy Krueger',
  'Jason Voorhees',
  'Michael Myers'
]

console.log(findTheKiller(whisper, suspects)) // -> 'Dracula'

const whisper2 = '~r~dd~'
const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

console.log(findTheKiller(whisper2, suspects2)) // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd$'
const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

console.log(findTheKiller(whisper3, suspects3)) // -> ''

const whisper4 = 'mi~~def'
const suspects4 = ['Midudev', 'Midu', 'Madeval']

console.log(findTheKiller(whisper4, suspects4)) // -> ''

console.log(findTheKiller('~~~~~~$', ['Pennywise', 'Leatherface', 'Agatha'])) // -> 'Agatha'

console.log(findTheKiller('~~$', ['ab', 'Leatherface', 'Agatha'])) // -> 'Agatha'
