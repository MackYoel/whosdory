const availableContents = [
  'ð',
  'ð',
  'ð',
  'ð',
  'ð',
  'ð',
  'ð',
  'ðĪĢ',
  'ð',
  'ð',
  'ð',
  'ð',
  'ð',
  'ð',
  'ð',
  'ð',
  'ðĨ°',
  'ð',
  'ð',
  'ð',
  'ð',
  'ðĨē',
  'ðĪŠ',
  'ð',
  'ð',
  'ð',
  'ðĪ',
  'ð',
  'ðĪ',
  'ðĨļ',
  'ð§',
  'ðĪ ',
  'ðĨģ',
  'ðĪ',
  'ðĪĄ',
  'ð',
  'ðķ',
  'ð',
  'ð',
]

export function getShuffledCards(pairsNumber: number) {
  const items = availableContents.slice(0, pairsNumber)
  const itemsWithPairs = items.concat(items)

  const shuffled = itemsWithPairs
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => ({
      content: value,
      isFlipped: false,
      isMatched: false,
      successAnimation: false,
      wrongAnimation: false,
    }))
  return shuffled
}
