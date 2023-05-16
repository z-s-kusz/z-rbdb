<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useGetSongsByCategory } from '@/hooks/useGetSongsByCategory';
import SortableSongCardList from '@/components/song-cards/SortableSongCardList.vue';

const route = useRoute();
const category = route.params.category as string;
const query = decodeURIComponent(route.params.query as string);

const { songs, error, isLoading } = useGetSongsByCategory(category, query);

</script>

<template>
    <div v-if="songs.length" class="song-list">
        <SortableSongCardList :songs="songs" :title="query" />
    </div>
    <div v-else-if="isLoading" class="container">
        Loading...
    </div>
</template>

<style lang="scss" scoped>
.song-list {
    margin-top: 1rem;
}

.container {
    padding: 0.5rem;
}
</style>