<script setup lang="ts">
import { ref } from 'vue';
import Song from '@/types/song';

interface Props {
    song: Song;
}

const props = defineProps<Props>();
const song = props.song;
const getColor = (song: Song) => {
    let color = 'bg-';
    if (song.owned) {
        return color + 'green';
    }
    return color + 'grey';
};

const cardColor = getColor(song);

const expanded = ref(false);
const toggleExpandedView = () => {
    expanded.value = !expanded.value;
}
</script>

<template>
    <v-card class="song-card-small" :class="cardColor">
        <div class="main-card">
            <div>
                <p><router-link :to="{ name: 'song', params: { id: song.id } }">{{ song.title }}</router-link></p>
                <p>{{ song.artist }}</p>
            </div>
            <div class="main-right">
                <p>{{ song.album }}</p>
                <p>{{ song.year }}</p>
            </div>
        </div>
        <v-btn color="secondary" variant="tonal" class="expand" density="compact" @click="toggleExpandedView">
            <v-icon icon="mdi-expand-more"></v-icon>
        </v-btn>

        <div v-if="expanded" class="main-card">
            <div>
                <p>{{ song.source }}</p>
                <p>{{ song.primaryGenere }}</p>
            </div>
            <div class="main-right">
                <p>{{ song.thank }}</p>
                <p>{{ song.owner }}</p>
            </div>
        </div>
    </v-card>
</template>

<style lang="scss" scoped>
.song-card-small {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0.5rem;
}

.main-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.main-right {
    text-align: right;
}

.expand {
    width: 100%;
}
</style>