<script setup lang="ts">
import { expandedGenres, rbGenres } from '@/types/genres';
import { songSources } from '@/types/song-sources';
import { thankOptions } from '@/types/thank-options';
import { reactive } from 'vue';
import Song from '@/types/song';

interface Props {
    song: Song;
}
const props = defineProps<Props>();
const emit = defineEmits(['submit']);

const song = props.song; // breaks reactivity with parent but we don't need that here

const form = reactive({
    title: song.title,
    artist: song.artist,
    album: song.album,
    year: song.year + '', // string user input, number when sent to db
    genres: song.genres,
    primaryGenre: song.primaryGenre,
    owned: song.owned,
    packName: song.packName,
    source: song.source,
    owner: song.owner === '' ? 'Not Owned' : song.owner,
    thank: song.thank,
    harmonies: song.harmonies,
});
// const rbDifficulty = reactive({
//     vocals: '', // string, number when sent to db
//     guitar: '',
//     bass: '',
//     drums: '',
// });
// const votedDifficulty = reactive({
//     vocals: '', // string, number when sent to db
//     guitar: '',
//     bass: '',
//     drums: '',
// });
const allGenres = rbGenres.concat(expandedGenres);
const ownerOptions = ['Zach', 'Pat', 'Not Owned'];

const submit = async () => {
    emit('submit', form);
};

</script>

<template>
    <v-form @submit.prevent="submit">
        <v-text-field v-model="form.title" label="Song Title"></v-text-field>
        <v-text-field v-model="form.artist" label="Artist"></v-text-field>
        <v-text-field v-model="form.year" label="Year" type="number"></v-text-field>
        <v-select :items="rbGenres" v-model="form.primaryGenre" label="Genre (Primary)"></v-select>
        <v-select :items="allGenres" v-model="form.genres" label="Other Genres (For Searchability)" multiple></v-select>
        <v-select :items="songSources" v-model="form.source" label="Song Source"></v-select>
        <v-text-field v-model="form.packName" label="Parent Buy Pack (optional)"></v-text-field>
        <v-select :items="ownerOptions" v-model="form.owner" label="Who Bought The Song"></v-select>
        <v-select :items="thankOptions" v-model="form.thank" label="Thank This Person"></v-select>
        <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
</template>

<style lang="scss" scoped>
form {
    max-width: 1080px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-right: auto;
    margin-left: auto;
}
</style>
