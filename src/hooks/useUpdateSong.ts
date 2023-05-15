import Song from "@/types/song";
import { ref } from "vue";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "@/firebase";

export function useUpdateSong() {
    const isLoading = ref(false);

    const updateSong = (songData: Partial<Song>): Promise<void> => {
        isLoading.value = true;

        const songRef = doc(db, 'songs', songData.id);
        const updateData = songData;
        delete updateData.id;

        return setDoc(songRef, updateData, { merge: true })
        .then((response) => {
            return Promise.resolve();
        })
        .catch((error) => {
            return Promise.reject();
        })
        .finally(() => {
            isLoading.value = false;
        });
    };

    return {
        updateSong,
        isLoading,
    };
}
