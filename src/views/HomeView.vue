<template>
  <main class="flex h-[100dvh] w-[100dvw] justify-end bg-slate-100">
    <Sidebar :is-hide-sidebar="isHideSidebar"></Sidebar>
    <div
      class="relative z-10 transition-all duration-300"
      :class="[isHideSidebar ? 'w-[calc(100%-68px)]' : 'w-[calc(100%-288px)]']"
    >
      <div class="flex items-center text-2xl text-deepblue">
        <button
          type="button"
          class="flex items-center justify-center p-2"
          @click="isHideSidebar = !isHideSidebar"
        >
          <box-icon
            name="menu"
            size="28px"
            color="#11101d"
          ></box-icon>
        </button>
        <span class="font-semibold">Drop Down Sidebar</span>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'

const isHideSidebar = ref(false)
</script>
