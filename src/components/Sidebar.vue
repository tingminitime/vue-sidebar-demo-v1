<template>
  <div class="fixed top-0 left-0 h-full w-[260px] bg-deepblue">
    <div class="flex h-14 items-center">
      <div class="flex px-6">
        <box-icon
          name="leaf"
          type="solid"
          color="white"
          size="30px"
        ></box-icon>
      </div>
      <span class="text-2xl font-semibold text-white">CodingLab</span>
    </div>
    <!-- > Main menu -->
    <ul class="h-full pt-7">
      <li
        class="relative transition hover:bg-darkblue"
        v-for="item in sidebarList"
        :key="item.id"
      >
        <div class="flex items-center justify-between">
          <a
            href="javascript:;"
            class="flex flex-grow items-center py-4"
          >
            <div class="flex px-6">
              <box-icon
                :name="item.iconName"
                :color="item.iconColor"
                size="20px"
              ></box-icon>
            </div>
            <span class="text-lg text-white">{{ item.name }}</span>
          </a>
          <button
            v-if="item.hasSubItems"
            type="button"
            class="flex items-center self-stretch px-6"
            @click.stop="item.isToggle = !item.isToggle"
          >
            <box-icon
              name="chevron-down"
              color="white"
              size="20px"
            ></box-icon>
          </button>
        </div>
        <!-- > Sub menu -->
        <ul
          v-if="item.hasSubItems"
          class="bg-darkblue"
          :class="[item.isToggle ? 'submenu-open' : 'submenu-close']"
        >
          <li
            class=""
            v-for="subItem in item.subItems"
          >
            <a
              href="javascript:;"
              class="inline-block whitespace-nowrap py-1 text-white"
              >{{ subItem.name }}</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const sidebarList = reactive([
  {
    id: 1,
    iconName: 'grid-alt',
    iconColor: 'white',
    name: 'Dashboard',
    hasSubItems: false,
    isToggle: false,
    subItems: [],
  },
  {
    id: 2,
    iconName: 'collection',
    iconColor: 'white',
    name: 'Category',
    hasSubItems: true,
    isToggle: false,
    subItems: [
      {
        id: 1,
        name: 'Web Design',
      },
      {
        id: 2,
        name: 'Login Form',
      },
      {
        id: 3,
        name: 'Card Design',
      },
    ],
  },
  {
    id: 3,
    iconName: 'book-alt',
    iconColor: 'white',
    name: 'Posts',
    hasSubItems: true,
    isToggle: false,
    subItems: [],
  },
])
</script>

<style lang="scss"></style>
