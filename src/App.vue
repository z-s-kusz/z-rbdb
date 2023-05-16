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
      <RouterLink to="/">Home (All Owned Songs)</RouterLink>
      <RouterLink to="/search">Search (Beta)</RouterLink>
      <template v-if="!globalUserRef">
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/signup">Sign Up</RouterLink>
      </template>
      <template v-else>
        <LogOutButton />
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <site-footer />
  </v-app>
</template>

<style lang="scss" scoped>
a {
  display: block;
  padding: 1rem;
}
</style>