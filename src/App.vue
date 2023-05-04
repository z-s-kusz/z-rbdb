<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
</script>

<template>
  <v-app>
    <site-header />

    <v-main>
      <router-view></router-view>
    </v-main>

    <site-footer />
  </v-app>
</template>
