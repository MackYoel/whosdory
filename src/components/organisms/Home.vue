<script setup lang="ts">
import HeaderWeb from '../atoms/HeaderWeb.vue'
import GameBoard from '../atoms/GameBoard.vue'
import { ref } from 'vue'
import PlayersForm from '../atoms/PlayersForm.vue'

const players = ref([
  {
    id: 1,
    name: 'Player A',
    plays: 0,
    matches: 0,
    currentPlay: [],
  },
  {
    id: 2,
    name: 'Player B',
    plays: 0,
    matches: 0,
    currentPlay: [],
  },
])

const isPlaying = ref(false)
const requestPlayers = ref(false)
const start = () => {
  isPlaying.value = true
}
</script>

<template>
  <div class="text-gray-50 flex flex-col">
    <HeaderWeb class="mb-6" />
    <main class="text-2xl px-6">
      <div v-if="isPlaying" class="max-w-lg md:max-w-2xl mx-auto">
        <GameBoard class="mb-6" :players="players" :pairs="6" />
      </div>
      <PlayersForm
        v-else-if="requestPlayers"
        :players="players"
        @submit="start"
      />
      <template v-else>
        <h1 class="max-w-sm mx-auto mb-6">
          Challenge a friend and find out who has the memory of Dory
          <span class="text-4xl inline-block ml-2"> 🐟 </span>
        </h1>
        <div class="text-center">
          <button
            class="inline-block rounded-xl bg-green-700 tracking-wider px-6 py-2 active:bg-green-800"
            @click="requestPlayers = true"
          >
            Challenge a friend!
          </button>
        </div>
      </template>
    </main>
  </div>
</template>

<style></style>
