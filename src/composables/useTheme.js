import { ref, onMounted, watch } from 'vue'

function useTheme() {
  const themeTypes = ['light', 'dark']
  const theme = ref('light')

  const setChangeTheme = () => {
    switch (theme.value) {
      case 'light': {
        theme.value = 'dark'
        break
      }
      case 'dark': {
        theme.value = 'light'
        break
      }
      default: {
        break
      }
    }

    localStorage.setItem('theme', theme.value)
  }

  watch(theme, newValue => {
    if (newValue === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', newValue)
  })

  function setDefaultTheme() {
    const themeFromLocalStorage = localStorage.theme
    if (!themeTypes.includes(themeFromLocalStorage)) {
      localStorage.setItem('theme', theme.value)
    } else {
      theme.value = themeFromLocalStorage
    }

    localStorage.setItem('theme', theme.value)
  }

  return {
    theme,
    setChangeTheme,
    setDefaultTheme,
  }
}

export default useTheme
