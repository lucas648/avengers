import { createAction, props } from '@ngrx/store';
import { ComicsState } from '../reducers/comics';

export const loadComicsSuccess = createAction(
    '[Comics] Load Comics Success',
    props<{ comics: any[] }>()
);

export const setComic = createAction('[Comic] Set Comic', props<{ comic: ComicsState }>());

export const updateComic = createAction('[Comic] Update Comic', props<{ comic: ComicsState }>());

export const deleteComic = createAction(
    '[Comics] Delete Comic',
    props<{ comicId: number }>()
);