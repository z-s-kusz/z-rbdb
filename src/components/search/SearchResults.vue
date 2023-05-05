<script setup lang="ts">
import Song from '@/types/song';
import songData from '@/data/zach-songs';
import SongCardSmall from '../song-cards/SongCardSmall.vue';

const songs: Song[] = songData;

</script>

<template>
    <template v-if="songs.length">
        <SongCardSmall v-for="song in songs" :song="song" />
    </template>
    <div v-else>
        <p>No matching songs found in rockband.</p>
    </div>
</template>
