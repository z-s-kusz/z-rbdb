<script setup lang="ts">
import { useGetSong } from '@/hooks/useGetSong';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import RatingTable from './RatingTable.vue';
import { globalUserRef } from '@/firebase';

const route = useRoute();
const songId = route.params.id as string;

const { song, error, isLoading, getSong } = useGetSong(songId);

const allGenreListings = computed(() => {
    if (!song.value) return '';

    let genresString = song.value.primaryGenre;
    const genres = song.value.genres;
    if (genres.length) {
        genresString += ' [';
        genres.forEach((genre, i) => {
            if (i === genres.length - 1) genresString += genre;
            else genresString += `${genre}, `;
        });
        genresString += ']';
    }
    return genresString;
});
</script>

<template>
    <v-card class="card center-column">
        <template v-if="song">
            <header>
                <h1>
                    {{ song.title }} by {{ song.artist }}
                </h1>
                <router-link v-if="globalUserRef" :to="`./${songId}/edit`">
                    <v-btn>Edit Song Details</v-btn>
                </router-link>
            </header>

            <v-divider color="blue" thickness="5"></v-divider>
            <p>Album: {{ song.album }}</p>
            <p>Year: {{ song.year }}</p>
            <p>Genre: {{ allGenreListings }}</p>

            <RatingTable :difficulty="song.rbDifficulty">Rock Band Difficulty</RatingTable>
            <!-- song.votedDifficulty -->
            <RatingTable :difficulty="{ vocals: 4, guitar: 5, bass: 2, drums: 6 }">
                <v-icon icon="mdi-weather-cloudy"></v-icon> Real Feel Difficulty
            </RatingTable>
        </template>

        <template v-else>
            Loading...
        </template>
    </v-card>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card {
    margin: 0.5rem;
    padding: 1rem;
}
</style>