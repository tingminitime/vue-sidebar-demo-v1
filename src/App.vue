<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import useTheme from './composables/useTheme'
import { onMounted, provide } from 'vue'
const { theme, setChangeTheme, setDefaultTheme } = useTheme()
onMounted(() => {
  setDefaultTheme()
})

provide('theme', theme)
provide('setChangeTheme', setChangeTheme)
</script>

<style scoped></style>
