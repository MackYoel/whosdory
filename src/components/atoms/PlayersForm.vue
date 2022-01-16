<script setup lang="ts">
defineProps<{ players: Array<object> }>()
</script>

<template>
  <form @submit.prevent class="text-black">
    <div v-for="(player, $index) in players" :key="$index" class="mb-4">
      <div class="text-center">
        <label class="inline-flex">
          <span class="text-white">Player {{ $index + 1 }}</span>
          <input
            required
            type="text"
            v-model.trim="player.name"
            class="w-64 ml-4 px-2 py-1 rounded-md"
          />
        </label>
      </div>
    </div>
    <div class="text-center">
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-64"
      >
        Start
      </button>
    </div>
  </form>
</template>
