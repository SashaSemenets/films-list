import { Director } from './director';
import { Writer } from './writer';

export class Film {
    constructor(
        public title: string,
        public originalTitle: string,
        public year: string,
        public releaseDate: string,
        public directors: Array<Director>,
        public writers: Array<Writer>,
        public runtime: string,
        public urlPoster: string,
        public countries: Array<string>,
        public languages: Array<string>,
        public genres: Array<string>,
        public plot: string,
        public simplePlot: string,
        public idIMDB: string,
        public urlIMDB: string,
        public rating: string,
        public metascore: string,
        public rated: string,
        public votes: string,
        public type: string,
        public ranking: number,
        public favorite?: boolean
    ) {}
}