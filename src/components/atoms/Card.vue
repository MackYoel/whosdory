<script setup lang="ts">
defineProps<{
  isFlipped: boolean
  wrongAnimation: boolean
  successAnimation: boolean
}>()
</script>

<template>
  <div class="flip-card cursor-pointer">
    <div class="flip-card-inner" :class="{ rotate: isFlipped }">
      <div class="flip-card-front border rounded-2xl">
        <slot name="front" />
      </div>
      <div
        class="flip-card-back border rounded-2xl flex items-center justify-center"
        :class="{
          'bg-green-700': successAnimation,
          'bg-red-700': wrongAnimation,
        }"
      >
        <slot name="back" />
      </div>
    </div>
  </div>
</template>

<style>
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  @apply relative w-full h-full transition-transform duration-300;
  transform-style: preserve-3d;
}

.rotate {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  @apply absolute inset-0;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-back {
  @apply bg-white transition-colors;
  transform: rotateY(180deg);
}
</style>
