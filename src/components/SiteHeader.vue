<script setup lang="ts">
</script>

<template>
    <v-app-bar>
        <v-app-bar-title><router-link to="/">Z-RB-DB</router-link></v-app-bar-title>
        <template v-slot:append>
            <router-link to="/search">
                <v-btn icon="mdi-search" color="primary"></v-btn>
            </router-link>
        </template>
    </v-app-bar>
</template>
