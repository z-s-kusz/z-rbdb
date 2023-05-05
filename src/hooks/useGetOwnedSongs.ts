import Song from "@/types/song";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ref } from "vue";
import { db } from "@/firebase";

export function useGetOwnedSongs() {
    const songs = ref<Song[]>([]);
    const error = ref('');
    const isLoading = ref(false);

    const songQuery = query(collection(db, 'songs'), where('owned', '==', true));

    const callSongsAPI = () => {
        isLoading.value = true;

        getDocs(songQuery)
        .then((response) => {
            const songData = response.docs.map((document) => {
                const song = document.data() as Song;
                song.id = document.id; // does not return an id in data() call
                return song;
            });
            songs.value = songData;
            error.value = '';
        })
        .catch((error) => {
            songs.value = [];
            console.error('error getting owned songs list', error);
            error.value = 'Oops we got an error'
        })
        .finally(() => {
            isLoading.value = false;
        });
    };

    callSongsAPI();

    return {
        songs,
        error,
        isLoading,
        getSongs: callSongsAPI,
    };
}
