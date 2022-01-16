<script setup lang="ts">
import Dropdown from './Dropdown.vue'
import { MenuItem } from '@headlessui/vue'

const appName = 'WhosDory'
</script>

<template>
  <header class="h-16 flex items-center px-4">
    <div class="font-black text-xl">{{ appName }}</div>
    <div class="ml-auto flex items-center">
      <Dropdown>
        <template #trigger>
          <IconCarbonUserAvatar class="text-2xl" />
        </template>
        <template #menu-items>
          <MenuItem v-slot="{ active }">
            <button
              type="submit"
              :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700']"
              class="block w-full text-left px-4 py-2"
            >
              Sign in
            </button>
          </MenuItem>
        </template>
      </Dropdown>
    </div>
  </header>
</template>

<style scoped></style>
