<script setup lang="ts">
import Song from '@/types/song';
import SongCardSmall from './SongCardSmall.vue';

interface Props {
    songs: Song[];
}

const props = defineProps<Props>();
const songs = props.songs;
</script>

<template>
    <SongCardSmall v-for="song in songs" :song="song" />
</template>

<style lang="scss"></style>
