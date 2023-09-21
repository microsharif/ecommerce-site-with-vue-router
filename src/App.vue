<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
    <nav id="header" class="w-full z-30 top-0 py-1 border-b-2 border-gray-200">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

          <label for="menu-toggle" class="cursor-pointer md:hidden block">
              <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <title>menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
          </label>
          <input class="hidden" type="checkbox" id="menu-toggle" />

          <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
              <nav>
                  <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                    <li class="inline-block no-underline hover:text-black hover:underline py-2 px-4"><router-link to="/">Shop</router-link></li>
                    <li class="inline-block no-underline hover:text-black hover:underline py-2 px-4"><router-link to="/about">About</router-link></li>
                  </ul>
              </nav>
          </div>
      </div>
    </nav>
    <router-view :key="$route.fullPath"  />
  </div>
</template>

