<template>
  <div
    class="fixed top-0 left-0 z-20 h-[100dvh] bg-deepblue transition-all duration-300"
    :class="[isHideSidebar ? 'w-[68px]' : 'w-72']"
  >
    <div class="flex h-14 items-center">
      <div class="flex px-6">
        <box-icon
          name="leaf"
          type="solid"
          color="white"
          size="30px"
        ></box-icon>
      </div>
      <span
        class="pointer-events-none text-2xl font-semibold text-white transition-all delay-100 duration-300"
        :class="[isHideSidebar ? 'opacity-0 delay-[0]' : '']"
      >
        CodingLab
      </span>
    </div>
    <!-- > Main menu -->
    <ul
      class="h-[calc(100%-120px)] w-full pt-7 pb-16 scrollbar-none"
      :class="[isHideSidebar ? 'overflow-visible' : 'overflow-auto']"
    >
      <li
        class="group/item relative z-30 transition hover:bg-darkblue"
        v-for="item in sidebarList"
        :key="item.id"
        @click.stop="() => toggleMenuHandler(item.id)"
      >
        <div class="flex items-center justify-between">
          <a
            href="javascript:;"
            class="flex flex-grow items-center py-3"
          >
            <div class="flex px-6">
              <box-icon
                :name="item.iconName"
                :color="item.iconColor"
                size="20px"
              ></box-icon>
            </div>
            <span
              class="text-lg text-white transition-all duration-300"
              :class="[isHideSidebar ? 'opacity-0' : 'opacity-100 delay-100']"
            >
              {{ item.name }}
            </span>
          </a>
          <button
            v-if="item.hasSubItems"
            type="button"
            class="self-stretch px-6"
          >
            <div
              class="flex items-center transition-all"
              :class="[
                { hidden: isHideSidebar },
                { '-rotate-180': item.isToggle },
              ]"
            >
              <box-icon
                name="chevron-down"
                color="white"
                size="20px"
              ></box-icon>
            </div>
          </button>
        </div>
        <!-- > Sub menu -->
        <ul
          v-if="item.hasSubItems"
          class="bg-darkblue"
          :class="[
            isHideSidebar
              ? 'submenu-close'
              : item.isToggle
              ? 'submenu-open block'
              : 'hidden',
          ]"
        >
          <li
            class=""
            v-for="subItem in item.subItems"
          >
            <a
              href="javascript:;"
              class="block whitespace-nowrap py-1 text-white"
              :class="[
                subItem.default
                  ? 'text-lg opacity-100'
                  : 'opacity-60 transition hover:opacity-100',
              ]"
              >{{ subItem.name }}</a
            >
          </li>
        </ul>
        <div
          v-else
          class="bg-darkblue"
          :class="[isHideSidebar ? 'submenu-close' : 'hidden']"
        >
          <a
            href="javascript:;"
            class="block whitespace-nowrap py-1 text-lg text-white"
            >{{ item.name }}</a
          >
        </div>
      </li>
    </ul>
    <!-- > Profile -->
    <div
      class="fixed bottom-0 z-30 flex items-center gap-x-2 bg-darkblue px-2 py-2 transition-all duration-300"
      :class="[isHideSidebar ? 'w-[68px]' : 'w-72']"
    >
      <div class="h-[52px] w-[52px] shrink-0">
        <img
          src="https://i.pravatar.cc/128"
          alt=""
          class="rounded-2xl bg-deepblue object-cover p-2"
        />
      </div>
      <div
        class="shrink-0 pr-4 text-white transition-all"
        :class="[
          isHideSidebar
            ? 'pointer-events-none opacity-0'
            : 'opacity-100 delay-200',
        ]"
      >
        <div>Tim</div>
        <div class="text-sm">Front-end developer</div>
      </div>
      <button
        type="button"
        class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-deepblue transition-all"
        :class="[
          isHideSidebar
            ? 'pointer-events-none opacity-0'
            : 'opacity-100 delay-200',
        ]"
      >
        <box-icon
          name="log-out"
          color="white"
          size="20px"
        ></box-icon>
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'

const props = defineProps({
  isHideSidebar: {
    type: Boolean,
    default: false,
  },
})

const sidebarList = reactive([
  {
    id: 1,
    iconName: 'grid-alt',
    iconColor: 'white',
    name: 'Dashboard',
    link: undefined,
    hasSubItems: false,
    isToggle: false,
    subItems: [],
  },
  {
    id: 2,
    iconName: 'collection',
    iconColor: 'white',
    name: 'Category',
    link: undefined,
    hasSubItems: true,
    isToggle: false,
    subItems: [
      {
        id: 1,
        name: 'Category',
        default: true,
        link: undefined,
      },
      {
        id: 2,
        name: 'Web Design',
        default: false,
        link: undefined,
      },
      {
        id: 3,
        name: 'Login Form',
        default: false,
        link: undefined,
      },
      {
        id: 4,
        name: 'Card Design',
        default: false,
        link: undefined,
      },
    ],
  },
  {
    id: 3,
    iconName: 'book-alt',
    iconColor: 'white',
    name: 'Posts',
    link: undefined,
    hasSubItems: true,
    isToggle: false,
    subItems: [
      {
        id: 1,
        name: 'Posts',
        default: true,
        link: undefined,
      },
      {
        id: 2,
        name: 'HTML & CSS',
        default: false,
        link: undefined,
      },
      {
        id: 3,
        name: 'JavaScript',
        default: false,
        link: undefined,
      },
      {
        id: 4,
        name: 'Vue',
        default: false,
        link: undefined,
      },
      {
        id: 5,
        name: 'React',
        default: false,
        link: undefined,
      },
    ],
  },
  {
    id: 4,
    iconName: 'pie-chart-alt-2',
    iconColor: 'white',
    name: 'Analytics',
    link: undefined,
    hasSubItems: false,
    isToggle: false,
    subItems: [],
  },
  {
    id: 5,
    iconName: 'line-chart',
    iconColor: 'white',
    name: 'Chart',
    link: undefined,
    hasSubItems: false,
    isToggle: false,
    subItems: [],
  },
  {
    id: 6,
    iconName: 'plug',
    iconColor: 'white',
    name: 'Plugins',
    link: undefined,
    hasSubItems: true,
    isToggle: false,
    subItems: [
      {
        id: 1,
        name: 'Plugins',
        default: true,
        link: undefined,
      },
      {
        id: 2,
        name: 'UI Face',
        default: false,
        link: undefined,
      },
      {
        id: 3,
        name: 'Pigments',
        default: false,
        link: undefined,
      },
      {
        id: 2,
        name: 'Box Icons',
        default: false,
        link: undefined,
      },
    ],
  },
  {
    id: 7,
    iconName: 'compass',
    iconColor: 'white',
    name: 'Explore',
    link: undefined,
    hasSubItems: false,
    isToggle: false,
    subItems: [],
  },
  {
    id: 8,
    iconName: 'history',
    iconColor: 'white',
    name: 'History',
    link: undefined,
    hasSubItems: false,
    isToggle: false,
    subItems: [],
  },
  {
    id: 9,
    iconName: 'cog',
    iconColor: 'white',
    name: 'Settings',
    link: undefined,
    hasSubItems: false,
    isToggle: false,
    subItems: [],
  },
])

watch(
  () => props.isHideSidebar,
  newValue => {
    if (newValue) {
      sidebarList.forEach(item => {
        item.isToggle = false
      })
    }
  }
)

const toggleMenuHandler = id => {
  sidebarList.forEach(item => {
    if (item.id === id && item.hasSubItems) {
      item.isToggle = !item.isToggle
    }
  })
}
</script>

<style lang="scss"></style>
