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
    source: 'RB4' | 'RB4:Rivals' | 'RB1' | 'RB2' | 'RB3' | 'RB:Lego' | 'RB:Greenday' | 'DLC';
    owner: 'Zach' | 'Pat' | '';
    thank: 'Tom' | 'Eric' | 'Maria' | 'Katy' | 'Laura' | 'Scooter' | 'Zach' | 'Pat' | 'Harmonix';
    harmonies: boolean;
    rbDifficulty: Difficulty;
    votedDifficulty: Difficulty;
}
