import { Artist } from "./artist.model";
import { Track } from "./track.model";

export interface Album {
    readonly id: string;
    readonly title: string;
    readonly coverUrl: string;
    readonly releaseDate: Date;
    readonly artist: Artist;
    readonly tracks: Track[];
}
