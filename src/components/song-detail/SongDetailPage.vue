<script setup lang="ts">
import { useGetSong } from '@/hooks/useGetSong';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

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
    <v-card>
        <template v-if="song">
            <v-card-title>{{ song.title }} by {{ song.artist }}</v-card-title>
            <v-card-text>
                <p>Album: {{ song.album }}</p>
                <p>Year: {{ song.year }}</p>
                <p>Genre: {{ allGenreListings }}</p>

                <v-divider></v-divider>

                <h3>Rock Band Rated Difficulty</h3>
                <p>Vocals: {{ song.rbDifficulty.vocals }}</p>
                <p>Guitar: {{ song.rbDifficulty.guitar }}</p>
                <p>Bass: {{ song.rbDifficulty.bass }}</p>
                <p>Drums: {{ song.rbDifficulty.drums }}</p>

                <h3><v-icon icon="mdi-weather-cloudy"></v-icon>'Real Feel' Difficulty</h3>
                <p>Vocals: {{ song.votedDifficulty.vocals }}</p>
                <p>Guitar: {{ song.votedDifficulty.guitar }}</p>
                <p>Bass: {{ song.votedDifficulty.bass }}</p>
                <p>Drums: {{ song.votedDifficulty.drums }}</p>
            </v-card-text>
        </template>

        <template v-else>
            Loading...
        </template>
    </v-card>
</template>
