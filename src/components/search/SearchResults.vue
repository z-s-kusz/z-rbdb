<script setup lang="ts">
import Song from '@/types/song';
import SongList from '@/components/song-cards/SongList.vue';
import songData from '@/data/zach-songs';

const songs: Song[] = songData;

</script>

<template>
    <template v-if="songs.length">
        <SongList :songs="songs" />
    </template>
    <div v-else>
        <p>No matching songs found in rockband.</p>
    </div>
</template>
