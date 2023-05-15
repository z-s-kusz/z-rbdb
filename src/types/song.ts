import Difficulty from "./difficulty";

export default interface Song {
    id: string;
    title: string;
    artist: string;
    album: string;
    year: number;
    genres: string[];
    primaryGenre: string;
    owned: boolean;
    packName: string;
    source: string;
    owner: string;
    thank: string;
    harmonies: boolean;
    rbDifficulty: Difficulty;
    votedDifficulty: Difficulty;
}
