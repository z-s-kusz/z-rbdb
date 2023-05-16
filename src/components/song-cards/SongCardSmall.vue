<script setup lang="ts">
import Song from '@/types/song';

interface Props {
    song: Song;
}
const props = defineProps<Props>();

const getOwner = (song: Song) => {
    let owner = '';
    if (song.owned) {
        if (song.owner === 'Pat') owner = 'pat-owned';
        else owner = 'zach-owned';
    }
    return owner;
};
const ownedTag = getOwner(props.song);
</script>

<template>
    <v-card class="song-card-small" :class="ownedTag">
        <div class="flex-row">
            <p class="title text-h5">
                <router-link :to="{ name: 'song', params: { id: song.id } }">
                    {{ song.title }}
                </router-link>
            </p>
            <p class="top-right">{{ song.year }}</p>
        </div>

        <div class="flex-row">
            <p>{{ song.artist }}</p>
            <p class="right-align">{{ song.primaryGenre }}</p>
        </div>
    </v-card>
</template>

<style lang="scss" scoped>
.flex-row {
    display: flex;
    justify-content: space-between;
}

.song-card-small {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
}

.title {
    flex: 1 0 50%;
}

.top-right {
    text-shadow: 0px 0px 4px #000000, 0px 0px 8px rgba(0, 0, 0, 0.75);
    align-self: center;
}

.right-aligned {
    text-align: right;
}

.zach-owned {
    background: rgb(2, 0, 36);
    background: linear-gradient(225deg, #388E3C 26px, #212121 26px);
}

.pat-owned {
    background: rgb(0, 0, 0);
    background: linear-gradient(225deg, #388E3C 22px, #3949AB 22px, #3949AB 30px, #212121 30px);
}
</style>