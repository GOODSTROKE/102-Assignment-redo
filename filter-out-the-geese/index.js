/**
 * @desc The geese are any strings in the following array, which is pre-populated in your solution
 * @param {string[]} strings
 * @returns{string[]} strings
 */

function filterGeese(strings) {
  const geese = [
    'African',
    'Roman Tufted',
    'Toulouse',
    'Pilgrim',
    'Steinbacher',
  ]
  return strings.filter((string) => !geese.includes(string))
}

const stringList = [
  'Mallard',
  'Hook Bill',
  'African',
  'Crested',
  'Pilgrim',
  'Toulouse',
  'Blue Swedish',
]
const filteredList = filterGeese(stringList)

console.log(filteredList)
//output: [ 'Mallard', 'Hook Bill', 'Crested', 'Blue Swedish' ]
