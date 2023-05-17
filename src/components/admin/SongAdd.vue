<script setup lang="ts">
import Song from '@/types/song';
import SongEditForm from './SongEditForm.vue';
import Difficulty from '@/types/difficulty';
import { useCreateSong } from '@/hooks/useCreateSong';
import { ref } from 'vue';

const { createSong, loading } = useCreateSong();
const feedbackMessage = ref('');
const showFeedback = ref(false);
const formKey = ref(0);
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

const submit = async (form: Partial<Song>) => {
    if (loading.value) return;

    const songData: Song = {
        id: defaultSongValues.id,
        title: form.title,
        artist: form.artist,
        year: parseInt(form.year + ''),
        primaryGenre: form.primaryGenre,
        genres: form.genres,
        source: form.source,
        owned: form.owner !== 'Not Owned',
        owner: form.owner === 'Not Owned' ? '' : form.owner,
        thank: form.thank,
        packName: form.packName,
        // let the rest default empty for now
        harmonies: false,
        album: '',
        rbDifficulty: defaultDifficulty,
        votedDifficulty: defaultDifficulty,
    };

    try {
        await createSong(songData);
        showFeedback.value = true;
        feedbackMessage.value = 'Song created.';
        // force child form to refresh (to reset values) by setting new key
        formKey.value = formKey.value + 1;
    } catch (error) {
        showFeedback.value = true;
        feedbackMessage.value = 'Error creating song.';
    }

};

</script>

<template>
    <section class="center-column">
        <h1>Add New Song</h1>
        <SongEditForm :song="defaultSongValues" @submit="submit" :key="formKey" />
    </section>

    <v-snackbar v-model="showFeedback" timeout="1200">{{ feedbackMessage }}</v-snackbar>
</template>
