<script setup lang="ts">
import SearchForm from './SearchForm.vue';
import SearchResults from './SearchResults.vue';

</script>

<template>
    <v-card class="search-card">
        <SearchForm />
    </v-card>
    <div class="search-card">
        <SearchResults />
    </div>
</template>

<style lang="scss">
.search-card {
    padding: 0.25rem;
}
</style>