<script setup lang="ts">
import { useSongSearch } from '@/hooks/useSongSearch';
import SearchForm from './SearchForm.vue';
import SongCardSmall from '@/components/song-cards/SongCardSmall.vue';
import { ref } from 'vue';

const { search, searchResults, isLoading, error } = useSongSearch();
const waitingForSearch = ref(true);

const handleSearch = (searchString: string) => {
    console.log('parent called with', searchString);
    search(searchString);
    waitingForSearch.value = false;
};
</script>

<template>
    <SearchForm @search="handleSearch" :isLoading="isLoading" />

    <div class="search-results" v-if="searchResults.length">
        <SongCardSmall v-for="song in searchResults" :song="song" />
    </div>
    <template v-else-if="isLoading">
        <v-card class="no-songs">
            <p>Loading...</p>
        </v-card>
    </template>
    <template v-else-if="error">
        <v-card class="no-songs">
            <p>Search error. Try another search. If the issue persists bug Zach.</p>
        </v-card>
    </template>
    <template v-else-if="waitingForSearch">
        <v-card class="no-songs">
            <p>Search for songs by title, artist, album, or song pack name. Or browse by opening the song category
                listings.</p>
        </v-card>
    </template>
    <template v-else>
        <v-card class="no-songs">
            <p>No matching songs found in rockband.</p>
        </v-card>
    </template>
</template>

<style lang="scss" scoped>
.search-results {
    padding: 0.5rem;
}

p {
    text-align: center;
}

.no-songs {
    padding: 2rem;
    margin: 1rem;
}
</style>
