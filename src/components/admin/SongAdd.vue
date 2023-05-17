<script setup lang="ts">
import Song from '@/types/song';
import SongEditForm from './SongEditForm.vue';
import Difficulty from '@/types/difficulty';

const defaultDifficulty: Difficulty = {
    vocals: -1,
    guitar: -1,
    bass: -1,
    drums: -1,
};
const defaultSongValues: Song = {
    id: '',
    title: '',
    artist: '',
    album: '',
    year: 0,
    genres: [],
    primaryGenre: 'Rock',
    owned: false,
    packName: '',
    source: 'DLC',
    owner: '',
    thank: '',
    harmonies: false,
    rbDifficulty: defaultDifficulty,
    votedDifficulty: defaultDifficulty,
};

const submit = (form: Partial<Song>) => {
    console.log('create new song', form);
};

</script>

<template>
    <section class="center-column">
        <h1>Add New Song</h1>
        <SongEditForm :song="defaultSongValues" @submit="submit" />
    </section>
</template>
