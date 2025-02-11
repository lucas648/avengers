import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import api from './config';
import { Store } from '@ngrx/store';
import { AppState } from '../app/store/app.state';
import { loadComicsSuccess } from '../app/store/actions/comics';

@Injectable({
    providedIn: 'root'
})
export class ComicsService {
    constructor(private store: Store<AppState>) {}

    getComics(): Observable<any> {
        return from(api.get('/v1/public/comics').then((response: any) => {
            this.store.dispatch(loadComicsSuccess({ comics: response.data.data.results }));
            return response.data.data.results;
        }).catch((error: any) => {
            console.error(error);
            return [];
        }));
    }
}