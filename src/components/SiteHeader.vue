<script setup lang="ts">

const emit = defineEmits(['toggleNav']);
const navClick = () => {
    emit('toggleNav');
};
</script>

<template>
    <v-app-bar>
        <v-app-bar-nav-icon variant="text" @click="navClick"></v-app-bar-nav-icon>
        <v-app-bar-title class="title">
            <router-link to="/"><v-btn color="purple">z-rbdb</v-btn>
            </router-link></v-app-bar-title>
        <template v-slot:append>
            <router-link to="/explore">
                <v-btn color="primary">Explore</v-btn>
            </router-link>
        </template>
    </v-app-bar>
</template>
