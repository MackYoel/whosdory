class Game {
  constructor({ players, flipsPerTurn = 2 }) {
    this.flipsPerTurn = flipsPerTurn
    this.players = players
    this.flipCount = 0
    this.currentPlayer = players[0]
  }
}

const player = {
  plays: 0,
  matches: 0,
  name: '',
  currentPlay: [],
}
