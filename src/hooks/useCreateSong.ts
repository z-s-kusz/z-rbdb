import Song from "@/types/song";
import { ref } from "vue";
import { collection, doc, setDoc } from "firebase/firestore"; 
import { db } from "@/firebase";

export function useCreateSong() {
    const loading = ref(false);

    const createSong = (songData: Song): Promise<void> => {
        loading.value = true;

        const newSongRef = doc(collection(db, 'songs'));
        const updateData = songData;
        delete updateData.id;

        return setDoc(newSongRef, updateData)
        .then((response) => {
            return Promise.resolve();
        })
        .catch((error) => {
            return Promise.reject();
        })
        .finally(() => {
            loading.value = false;
        });
    };

    return {
        createSong,
        loading,
    };
}
