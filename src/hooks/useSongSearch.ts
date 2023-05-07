import Song from "@/types/song";
import { ref } from "vue";
import { collection, query, where, getDocs, and, or } from "firebase/firestore";
import { db } from "@/firebase";

export function useSongSearch() {
    const searchResults = ref<Song[]>([]);
    const error = ref('');
    const isLoading = ref(false);

    const search = (queryString: string) => {
        isLoading.value = true;

        // firestore DOES NOT SUPPORT case insesnitive single field searches
        // TODO use a differenet DaaS provider so I can do basic f--ing searches wthout a third party indexer
        // https://stackoverflow.com/questions/50005587/firestore-database-query-ignore-case-case-insenstive-and-like-clause
        const searchQuery = query(collection(db, 'songs'), or(
            where('title', '==', queryString),   
            where('artist', '==', queryString),
          ));

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
