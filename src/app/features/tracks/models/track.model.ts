import { Genre } from "../enums/genre.enum";
import { Language } from "../enums/language.enum";
import { Album } from "./album.model";
import { Artist } from "./artist.model";

export interface Track {
    readonly id: string;
    readonly title: string;
    readonly coverUrl: string;
    readonly genres: Genre[];
    readonly language: Language;
    readonly duration: string;
    readonly releaseDate: Date;
    readonly artist: Artist;
    readonly album: Album;
}
