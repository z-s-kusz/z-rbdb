<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import { ref } from 'vue';
import { globalUserRef } from './firebase';
import LogOutButton from './components/auth/LogOutButton.vue';

const navOpen = ref(false);
</script>

<template>
  <v-app>
    <SiteHeader @toggle-nav="navOpen = !navOpen" />

    <v-navigation-drawer v-model="navOpen" location="bottom" temporary>
      <RouterLink to="/">Home (My Library)</RouterLink>
      <RouterLink to="/search">Search (Beta)</RouterLink>
      <template v-if="!globalUserRef">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/signup">Sign Up</RouterLink>
      </template>
      <template v-else>
        <RouterLink to="/admin">Admin Page</RouterLink>
        <LogOutButton />
      </template>
    </v-navigation-drawer>

    <v-main class="main-content">
      <router-view></router-view>
    </v-main>

    <site-footer />
  </v-app>
</template>

<style lang="scss" scoped>
.main-content {
  display: grid;
  grid-template-columns: 1fr 1080px 1fr;
  grid-template-rows: auto;
  justify-content: center;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 720px 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

a {
  display: block;
  padding: 1rem;
}
</style>