import { db } from "@/firebase";
import Song from "@/types/song";
import { Query, and, collection, getDocs, or, query, where } from "firebase/firestore";
import { ref } from "vue";

export function useGetSongsByCategory(category: string, queryString: string) {
    const songs = ref<Song[]>([]);
    const error = ref('');
    const isLoading = ref(false);

    const getSongsByDecade = (year: string) => {
        const yearNumber = parseInt(year.substring(0, year.length - 1));

        const searchQuery = query(collection(db, 'songs'), and(
                where('year', '<=', yearNumber + 9),
                where('year', '>=', yearNumber)
            )
        );
        getSongs(searchQuery);
    };

    const getSongsByGenre = (genre: string) => {
        const searchQuery = query(collection(db, 'songs'), or(
                where('primaryGenre', '==', genre),
                where('genres', 'array-contains', genre)
            )
        );
        getSongs(searchQuery);
    };

    const getSongs = (searchQuery: Query) => {
        getDocs(searchQuery)
        .then((response) => {
            const songData = response.docs.map((songDoc) => {
                const song = songDoc.data() as Song;
                song.id = songDoc.id;
                return song;
            });

            songs.value = songData;
            error.value = '';
        })
        .catch((error) => {
            console.error('error in get songs', error);
            error.value = 'Error fetching songs.';
            songs.value = [];
        })
        .finally(() => {
            isLoading.value = false;
        });
    }

    if (category === 'decade') {
        getSongsByDecade(queryString);
    } else if (category === 'genre') {
        getSongsByGenre(queryString)
    }

    return {
        songs,
        error,
        isLoading,
    };
}
