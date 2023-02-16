<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="bg-blue-400 text-red-400 w-full text-6xl header">
    <div>THIS IS THE HEADER</div>
  </header>

  <nav class="bg-gray-200 w-full">
    <ul class="text-xl nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/info">Info</router-link>
    </ul>
  </nav>

  <main>
    <router-view />
  </main>

  <footer class="bg-green-200 w-full footer">
    THIS IS THE FOOTER
  </footer>
</template>

<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
}

.nav {
  display: flex;
  justify-content: flex-start;
  gap: 3vh;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 5vh;
}
</style>