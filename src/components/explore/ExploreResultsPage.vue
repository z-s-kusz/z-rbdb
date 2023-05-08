<script setup lang="ts">
import { useRoute } from 'vue-router';
import SongCardSmall from '../song-cards/SongCardSmall.vue';
import { useGetSongsByCategory } from '@/hooks/useGetSongsByCategory';

const route = useRoute();
const category = route.params.category as string;
const query = decodeURIComponent(route.params.query as string);

const { songs, error, isLoading } = useGetSongsByCategory(category, query);

</script>

<template>
    <section class="container">
        <template v-if="songs.length">
            <SongCardSmall v-for="song in songs" :song="song"></SongCardSmall>
        </template>
        <div v-else-if="isLoading">
            Loading...
        </div>
    </section>
</template>

<style lang="scss" scoped>
.container {
    padding: 0.5rem;
}
</style>