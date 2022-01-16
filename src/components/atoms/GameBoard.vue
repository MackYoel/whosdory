<script setup lang="ts">
import { ref } from 'vue'
import Card from './Card.vue'

import { getShuffledCards } from '../../utils/content'

const props = defineProps<{ pairs: number; players: Array<object> }>()

const enableFlip = ref(true)
const gameOver = ref(false)
const flipsPerTurn = 2
const cards = ref([])
cards.value = getShuffledCards(props.pairs)
const currentPlayer = ref(props.players[0])
const currentTurnCards = ref([])

const changeTurn = () => {
  currentPlayer.value =
    props.players[
      (props.players.indexOf(currentPlayer.value) + 1) % props.players.length
    ]
}

const saveMatch = () => {
  currentPlayer.value.matches++
}

const checkGameOver = () => {
  const nonMatches = cards.value.filter((card) => !card.isMatched)
  gameOver.value = nonMatches.length === 0
  console.log('nonMatches', nonMatches)
  // gameOver.value = Boolean(cards.value.find((card) => !card.isMatched))
}

const checkMatch = () => {
  const isMatched =
    new Set(currentTurnCards.value.map((item) => item.content)).size === 1

  if (isMatched) {
    currentTurnCards.value.forEach((card) => {
      card.successAnimation = true
    })
    setTimeout(() => {
      currentTurnCards.value.forEach((card) => {
        card.isMatched = true
        card.successAnimation = false
      })
      currentTurnCards.value = []
      enableFlip.value = true
      saveMatch()
      checkGameOver()
    }, 500)
  } else {
    currentTurnCards.value.forEach((card) => {
      card.wrongAnimation = true
    })
    setTimeout(() => {
      currentTurnCards.value.forEach((card) => {
        card.isFlipped = false
        card.wrongAnimation = false
      })
      currentTurnCards.value = []
      enableFlip.value = true
      changeTurn()
    }, 500)
  }
}

const flip = (card: object) => {
  if (!enableFlip.value || card.isMatched || card.isFlipped) return
  card.isFlipped = true
  enableFlip.value = false

  setTimeout(() => {
    enableFlip.value = true
    currentTurnCards.value.push(card)

    const turnIsOver = currentTurnCards.value.length === flipsPerTurn
    if (turnIsOver) {
      enableFlip.value = false
      checkMatch()
    }
  }, 150)
}
const startAgain = () => {
  location.reload()
}
</script>

<template>
  <div>
    <div v-if="gameOver" class="text-center mb-8">
      <h1>Game Over...</h1>

      <button
        class="inline-block rounded-xl bg-green-700 tracking-wider px-6 py-2 active:bg-green-800"
        @click="startAgain"
      >
        Start again
      </button>
    </div>
    <div class="flex divide-x mb-6">
      <div v-for="(player, $index) in players" :key="$index" class="flex-1 p-4">
        <div class="font-bold">
          {{ player.name }}
        </div>
        <div class="mb-1">
          matches:
          <span class="font-bold text-2xl ml-2 text-green-700">{{
            player.matches
          }}</span>
        </div>
        <div class="mt-1">
          <span
            v-show="currentPlayer.id === player.id"
            class="bg-green-700 rounded-md px-2 py-1"
            >You turn</span
          >
        </div>
      </div>
    </div>

    <div class="card">
      <Card
        v-for="(card, $index) in cards"
        :key="$index"
        :isFlipped="card.isFlipped"
        :wrongAnimation="card.wrongAnimation"
        :successAnimation="card.successAnimation"
        @click.native="flip(card)"
      >
        <template #back>
          <span class="text-6xl">{{ card.content }}</span>
        </template>
      </Card>
    </div>
  </div>
</template>

<style>
.card {
  display: grid;
  gap: 0.2rem;
  grid-auto-flow: dense;
  grid-auto-rows: theme('spacing.24');
  grid-template-columns: repeat(auto-fill, minmax(theme('spacing.24'), 1fr));
}
@screen sm {
  .card {
    gap: 0.5rem;
    grid-auto-rows: theme('spacing.32');
    grid-template-columns: repeat(auto-fill, minmax(theme('spacing.32'), 1fr));
  }
}
@screen md {
  .card {
    grid-auto-rows: theme('spacing.36');
    grid-template-columns: repeat(auto-fill, minmax(theme('spacing.36'), 1fr));
  }
}
</style>
