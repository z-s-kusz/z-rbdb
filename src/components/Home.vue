<script setup lang="ts">
import { useGetOwnedSongs } from '@/hooks/useGetOwnedSongs';
import SortableSongCardList from './song-cards/SortableSongCardList.vue';

const { songs, isLoading, error, getSongs } = useGetOwnedSongs();
</script>

<template>
    <v-card class="hero full-column">
        <section class="big-about">
            <p>Do I have the song you want to play?</p>
            <p>Is the song available to download?</p>
            <v-divider thickness="4" color="blue-accent-1"></v-divider>
            <p>Search the Rock Band Database by clicking explore at the top of the page.</p>
            <v-divider thickness="4" color="blue-accent-1"></v-divider>
            <p>...or search through what we already have below.</p>
        </section>
    </v-card>

    <div class="center-column">
        <template v-if="error">
            <p>Error loading... Click to retry or bother Zach</p>
            <v-btn color="error" @Click="getSongs">Retry</v-btn>
        </template>
        <!-- TODO add loading state that WON'T flash on/off if loading happens fast, which it should -->
        <template v-else>
            <SortableSongCardList :songs="songs" title="My Library" />
        </template>
    </div>
</template>

<style lang="scss" scoped>
.hero {
    margin-bottom: 1rem;
    padding: 0.5rem;

    @media (min-width: 700px) {
        padding: 2rem;
    }

    p {
        padding: 0 1rem;
    }
}

.big-about {
    font-size: 2.3rem;
    font-weight: bold;
    background: #9C27B0;
    background: linear-gradient(45deg, #9C27B0 0%, #FF9800);
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
}
</style>