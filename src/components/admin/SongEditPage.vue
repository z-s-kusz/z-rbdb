<script setup lang="ts">
import { useGetSong } from '@/hooks/useGetSong';
import { useRoute, useRouter } from 'vue-router';
import SongEditForm from './SongEditForm.vue';
import Song from '@/types/song';
import { useUpdateSong } from '@/hooks/useUpdateSong';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const songId = route.params.id as string;

const { song, error, isLoading: loadingSong, getSong } = useGetSong(songId);
const { updateSong, isLoading: laodingUpdate } = useUpdateSong();
const feedbackMessage = ref('');
const showFeedback = ref(false);

const submit = async (form: Partial<Song>) => {
    if (laodingUpdate.value) return;

    const songData: Partial<Song> = {
        id: song.value.id,
        title: form.title,
        artist: form.artist,
        year: parseInt(form.year + ''),
        primaryGenre: form.primaryGenre,
        genres: form.genres,
        source: form.source,
        owned: form.owner !== '',
        owner: form.owner,
        thank: form.thank,
    };

    try {
        await updateSong(songData);
        showFeedback.value = true;
        feedbackMessage.value = 'Song updated.';
        router.push('/explore');
    } catch (error) {
        showFeedback.value = true;
        feedbackMessage.value = 'Error updating song.';
    }

};
</script>

<template>
    <section class="center-column">
        <template v-if="song">
            <SongEditForm :song="song" @submit="submit" />
            <v-snackbar v-model="showFeedback" timeout="1200">{{ feedbackMessage }}</v-snackbar>
        </template>

        <template v-else>
            Loading...
        </template>
    </section>
</template>
