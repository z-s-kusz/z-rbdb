<script setup lang="ts">
import SongList from '@/components/song-cards/SongList.vue';
import Song from '@/types/song';
import { useCollection, useFirestore } from 'vuefire';
import { collection } from 'firebase/firestore';

const db = useFirestore();
// not really live data only needs to fetch once
const songs = useCollection<Song>(collection(db, 'songs'), { once: true });
</script>

<template>
    <v-card class="hero">
        <section class="big-about text-purple">
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

<style lang="scss" scoped>
.hero {
    margin-bottom: 1rem;
    padding: 0.5rem;
}

.big-about {
    font-size: 2.3rem;
    font-weight: bold;
}
</style>