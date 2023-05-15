<script setup lang="ts">
import { useGetSong } from '@/hooks/useGetSong';
import { useRoute } from 'vue-router';
import SongEditForm from './SongEditForm.vue';

const route = useRoute();
const songId = route.params.id as string;

const { song, error, isLoading, getSong } = useGetSong(songId);
</script>

<template>
    <template v-if="song">
        <SongEditForm :song="song" />
    </template>

    <template v-else>
        Loading...
    </template>
</template>
