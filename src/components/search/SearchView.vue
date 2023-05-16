<script setup lang="ts">
import { useSongSearch } from '@/hooks/useSongSearch';
import SearchForm from './SearchForm.vue';
import SortableSongCardList from '@/components/song-cards/SortableSongCardList.vue';
import { ref } from 'vue';

const { search, searchResults, isLoading, error } = useSongSearch();
const waitingForSearch = ref(true);

const handleSearch = (searchString: string) => {
    search(searchString);
    waitingForSearch.value = false;
};

const sadHelpMessage =
    `Search by title or artist. Search must be exact and is Case Sensitive.
Searching for The Black Keys will not work if you type "Black Keys" or "the black keys", it must exactly match "The Black Keys".
* Currently researching new databases that will make search easier. *`;
</script>

<template>
    <section class="center-column">
        <SearchForm @search="handleSearch" :isLoading="isLoading" />

        <div class="search-results" v-if="searchResults.length">
            <SortableSongCardList :songs="searchResults" :hideSearch="true" title="Results" />
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
                {{ sadHelpMessage }}
            </v-card>
        </template>
        <template v-else>
            <v-card class="no-songs">
                <p>No matching songs found in rockband.</p>
                {{ sadHelpMessage }}
            </v-card>
        </template>
    </section>
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
