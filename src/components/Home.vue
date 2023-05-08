<script setup lang="ts">
import { useGetOwnedSongs } from '@/hooks/useGetOwnedSongs';
import SongCardSmall from './song-cards/SongCardSmall.vue';

const { songs, isLoading, error, getSongs } = useGetOwnedSongs();
</script>

<template>
    <v-card class="hero">
        <section class="big-about text-purple">
            <p>Do we have the song you want to play?</p>
            <p>Is the song available to download?</p>
            <v-divider thickness="4" color="blue-accent-1"></v-divider>
            <p>Search the entire RB Network by clicking the icon at the top.</p>
            <v-divider thickness="4" color="blue-accent-1"></v-divider>
            <p>...or scroll, scroll, scroll through what we already have below.</p>
        </section>
        <p>* local search coming soon!</p>
    </v-card>

    <template v-if="error">
        <p>Error loading... Click to retry or bother Zach</p>
        <v-btn color="error" @Click="getSongs">Retry</v-btn>
    </template>
    <!-- TODO add loading state that WON'T flash on/off if loading happens fast, which it should -->
    <section class="card-container" v-else>
        <SongCardSmall v-for="song in songs" :song="song" />
    </section>
</template>

<style lang="scss" scoped>
.hero {
    margin-bottom: 1rem;
    padding: 0.5rem;
}

.big-about {
    font-size: 2.3rem;
    font-weight: bold;
}

.card-container {
    padding: 0.5rem;
}
</style>