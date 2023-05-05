import Song from "@/types/song";
import { ref } from "vue";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export function useSongSearch() {
    const searchResults = ref<Song[]>([]);
    const error = ref('');
    const isLoading = ref(false);

    const search = (queryString: string) => {
        isLoading.value = true;
        // todo open up to more than just title, should be able to configure 1 indexed field in firebase
        // todo? add fuzzy search?
        const searchQuery = query(collection(db, 'songs'), where('title', "==", queryString));

        getDocs(searchQuery)
            .then((response) => {
                const songs = response.docs.map((songDocument) => {
                    const song = songDocument.data() as Song;
                    song.id = songDocument.id;
                    return song;
                });
                searchResults.value = songs;
                error.value = '';
            })
            .catch((error) => {
                console.error('Error searching by string', error);
                error.value = 'Error with search. Try another search.';
                searchResults.value = [];
            })
            .finally(() => {
                isLoading.value = false;
            });
    };

    return {
        searchResults,
        error,
        isLoading,
        search,
    };
}
