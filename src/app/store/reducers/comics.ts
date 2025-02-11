import { createReducer, on } from '@ngrx/store';
import { deleteComic, loadComicsSuccess, setComic, updateComic } from '../actions/comics';

export interface ComicsState {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: any[];
    resourceURI: string;
    urls: { type: string; url: string }[];
    series: { resourceURI: string; name: string };
    variants: { resourceURI: string; name: string }[];
    collections: any[];
    collectedIssues: any[];
    dates: { type: string; date: string }[];
    prices: { type: string; price: number }[];
    thumbnail: { path: string; extension: string };
    images: any[];
    creators: {
        available: number;
        collectionURI: string;
        items: { resourceURI: string; name: string; role: string }[];
        returned: number;
    };
    characters: {
        available: number;
        collectionURI: string;
        items: any[];
        returned: number;
    };
    stories: {
        available: number;
        collectionURI: string;
        items: { resourceURI: string; name: string; type: string }[];
        returned: number;
    };
    events: {
        available: number;
        collectionURI: string;
        items: any[];
        returned: number;
    };
}

export const initialComicState: ComicsState[] = [
  {
    id: 0,
    digitalId: 0,
    title: "",
    issueNumber: 0,
    variantDescription: "",
    description: "",
    modified: "",
    isbn: "",
    upc: "",
    diamondCode: "",
    ean: "",
    issn: "",
    format: "",
    pageCount: 0,
    textObjects: [],
    resourceURI: "",
    urls: [
        {
            type: "",
            url: ""
        }
    ],
    series: {
        resourceURI: "",
        name: ""
    },
    variants: [],
    collections: [],
    collectedIssues: [],
    dates: [],
    prices: [],
    thumbnail: {
        path: "",
        extension: ""
    },
    images: [],
    creators: {
        available: 0,
        collectionURI: "",
        items: [
            {
                resourceURI: "",
                name: "",
                role: ""
            }
        ],
        returned: 1
    },
    characters: {
        available: 0,
        collectionURI: "",
        items: [],
        returned: 0
    },
    stories: {
        available: 2,
        collectionURI: "",
        items: [
            {
                resourceURI: "",
                name: "",
                type: ""
            },
            {
                resourceURI: "",
                name: "",
                type: ""
            }
        ],
        returned: 0
    },
    events: {
        available: 0,
        collectionURI: "",
        items: [],
        returned: 0
    }
}];

export const comicReducer = createReducer(
    initialComicState,
    on(setComic, (state, { comic }) => ({ ...state, ...comic })),
    on(loadComicsSuccess, (state, { comics }) => [...comics]),
    on(updateComic, (state, { comic }) => state.map(c => c.id === comic.id ? comic : c)),
    on(deleteComic, (state, { comicId }) => state.filter(c => c.id !== comicId))
);

export function comicsReducer(state: any, action: any) {
    return comicReducer(state, action);
}