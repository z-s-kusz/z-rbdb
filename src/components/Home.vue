<script setup lang="ts">
import SongList from '@/components/song-cards/SongList.vue';
import songData from '@/data/zach-songs';
import Song from '@/types/song';

const songs: Song[] = songData;
</script>

<template>
    <v-card class="hero">
        <section class="big-about">
            <p>Do we have the song you want to play?</p>
            <p>Is the song available to download?</p>
            <v-divider thickness="4" color="blue-accent-1"></v-divider>
            <p>Search the entire RB Network by clicking the icon at the top</p>
            <v-divider thickness="4" color="blue-accent-1"></v-divider>
            <p>...or scroll, scroll, scroll through what we already have below.</p>
        </section>
        <p>* local search coming soon!</p>
    </v-card>

    <SongList :songs="songs" />
</template>

<style lang="scss">
.hero {
    margin-bottom: 1rem;
    padding: 0.5rem;
}

.big-about {
    // line-height: 2rem;
    font-size: 2.3rem;
    font-weight: bold;
    color: rgb(173, 33, 173);
}
</style>