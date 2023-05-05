import Song from "@/types/song";
import { ref } from "vue";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

export function useGetSong(songId: string) {
    const song = ref<Song>();
    const error = ref('');
    const isLoading = ref(false);


    const docRef = doc(db, 'songs', songId);

    const getSong = () => {
        isLoading.value = true;

        getDoc(docRef)
            .then((response) => {
                if (response.exists()) {
                    const songObj = response.data() as Song;
                    songObj.id = response.id;
                    song.value = songObj;
                } else {
                    error.value = 'Bad song ID. No songs found matching provided id.';
                    song.value = null;
                }
            })
            .catch((error) => {
                error.value = 'Error getting song.';
                console.error('Error getting song by id', error);
            })
            .finally(() => {
                isLoading.value = false;
            });
    };

    getSong();

    return {
        song,
        error,
        isLoading,
        getSong,
    };
}
