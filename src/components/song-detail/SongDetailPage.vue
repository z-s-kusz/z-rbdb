<script setup lang="ts">
import { useDocument, useFirestore } from 'vuefire';
import { doc } from 'firebase/firestore';
import Song from '@/types/song';
import { useRoute } from 'vue-router';

const db = useFirestore();
const route = useRoute();
const songId = route.params.id as string;

const song = useDocument<Song>(doc(db, 'songs', songId), { once: true });

let allGenreListings = ` ${song.value.primaryGenre}`;
const genres = song.value.genres
if (genres.length) {
    allGenreListings += ' [';
    genres.forEach((genre, i) => {
        if (i === genres.length - 1) allGenreListings += genre;
        else allGenreListings += `${genre}, `;
    });
    allGenreListings += ']';
}
</script>

<template>
    <v-card>
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
    </v-card>
</template>
