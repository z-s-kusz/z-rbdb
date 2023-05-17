<script setup lang="ts">
import { useRoute } from 'vue-router';
import SongCardSmall from '@/components/song-cards/SongCardSmall.vue';
import { useGetSongsByCategory } from '@/hooks/useGetSongsByCategory';

const route = useRoute();
const artistName = decodeURIComponent(route.params.artistName as string);

const { isLoading, songs } = useGetSongsByCategory('artist', artistName);

</script>

<template>
    <section class="center-column">
        <h1>{{ artistName }}</h1>
        <template v-if="songs">
            <SongCardSmall v-for="song in songs" :song="song" :key="song.id" />
        </template>
        <div class="text-center" v-else>Loading...</div>
    </section>
</template>
