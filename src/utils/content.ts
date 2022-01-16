const availableContents = [
  '😀',
  '😃',
  '😄',
  '😁',
  '😆',
  '😅',
  '😂',
  '🤣',
  '😇',
  '😉',
  '😊',
  '🙂',
  '🙃',
  '😋',
  '😌',
  '😍',
  '🥰',
  '😘',
  '😗',
  '😙',
  '😚',
  '🥲',
  '🤪',
  '😜',
  '😝',
  '😛',
  '🤑',
  '😎',
  '🤓',
  '🥸',
  '🧐',
  '🤠',
  '🥳',
  '🤗',
  '🤡',
  '😏',
  '😶',
  '😐',
  '😑',
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
