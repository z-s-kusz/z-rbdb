<script setup lang="ts">
import Song from '@/types/song';
import SongCardSmall from './SongCardSmall.vue';

interface Props {
    songs: Song[];
}

const props = defineProps<Props>();
</script>

<template>
    <SongCardSmall v-for="song in props.songs" :song="song" />
</template>

<style lang="scss"></style>
