import { Film } from './film';
import { Director } from './director';
import { Writer } from './writer';

export class DataApi {
    constructor(
        public about: AboutInfo,
        public movies: Array<Film>
    ) {}
}

export class AboutInfo {
    constructor(
        public version: string,
        public serverTime: string
    ) {}
}