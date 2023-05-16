<script setup lang="ts">
import Song from '@/types/song';
import { computed, ref } from 'vue';
import SongCardSmall from './SongCardSmall.vue';

interface Props {
    songs: Song[];
    hideSearch?: boolean;
    title: string;
}
type SortType = 'artist' | 'title';

const props = defineProps<Props>();
const sortSwitch = ref<SortType>('title');
const search = ref('');

const artistClass = computed(() => {
    if (sortSwitch.value === 'artist') return 'active';
    return '';
});
const titleClass = computed(() => {
    if (sortSwitch.value === 'title') return 'active';
    return '';
});

const emptySearchMessage = computed<string>(() => {
    const lowerCaseSearch = search.value ? search.value.toLowerCase().trim() : '';
    if (lowerCaseSearch !== '' && sortedSongs.value.length === 0) {
        return 'No results found.';
    }
    return '';
});

const sortedSongs = computed(() => {
    let { songs } = props;

    const lowerCaseSearch = search.value ? search.value.toLowerCase().trim() : '';
    if (lowerCaseSearch !== '') {
        songs = songs.filter((song) => {
            const matchingSong = song.title.toLowerCase().includes(lowerCaseSearch) || song.artist.toLowerCase().includes(lowerCaseSearch)
            return matchingSong
        });
    }

    const sort = sortSwitch.value;
    const ignoredChars = ['(', "'", '"'];
    return songs.sort((a, b) => {
        let aProp = a[sort];
        let bProp = b[sort];
        if (ignoredChars.includes(aProp.charAt(0))) aProp = aProp.substring(1, aProp.length - 1);
        if (ignoredChars.includes(bProp.charAt(0))) bProp = bProp.substring(1, bProp.length - 1);

        if (aProp < bProp) {
            return -1;
        }
        if (aProp > bProp) {
            return 1;
        }
        return 0;
    });
});

const toggleSwitch = (sort: SortType) => {
    sortSwitch.value = sort;
};
</script>

<template>
    <h1 class="title">{{ title }}</h1>
    <section class="sort-container">
        <div class="switch-container">
            <span>Sort:&nbsp;</span>
            <span :class="artistClass" class="switch-option" @click="toggleSwitch('artist')">Artist</span>
            <v-switch v-model="sortSwitch" hide-details true-value="title" false-value="artist" class="switch"
                density="compact"></v-switch>
            <span :class="titleClass" class="switch-option" @click="toggleSwitch('title')">Title</span>
        </div>
        <v-text-field v-model="search" variant="underlined" single-line density="compact" hide-details clearable
            label="Search" class="search" v-if="!props.hideSearch"></v-text-field>
    </section>
    <section class="card-container">
        <SongCardSmall v-for="song in sortedSongs" :song="song" />
    </section>
    <v-card class="card-container error" v-show="emptySearchMessage">
        {{ emptySearchMessage }}
    </v-card>
</template>

<style lang="scss" scoped>
.title {
    text-align: center;
    background: #9C27B0;
    background: linear-gradient(45deg, #9C27B0 0%, #FF9800);
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    -webkit-background-clip: text;
}

.sort-container {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.switch-container {
    display: flex;
    align-items: center;
    flex: 1 1 50%;
}

.switch-option {
    cursor: pointer;
}

.search {
    flex: 0 1 50%;
}

.switch {
    flex: 0 1 auto;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.active {
    color: #FF9800;
}

.card-container {
    padding: 0.5rem;
}

.error {
    margin: 1rem;
}
</style>
