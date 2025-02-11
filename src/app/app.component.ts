import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../api/getComics';
import { ListItemsModel } from './components/ListItems/Models/ListItemsModel';
import { RouterOutlet } from '@angular/router';
import { map, Observable } from 'rxjs';
import { selectComics } from './store/selectors/comics';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { loadComicsSuccess } from './store/actions/comics';
import { ComicsState } from './store/reducers/comics';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items$: Observable<any>;

  constructor(private comicsService: ComicsService, private store: Store<AppState>) {
    this.items$ = this.store.select(selectComics).pipe(
      map((state: ComicsState) => state.characters)
    );
  }

  ngOnInit(): void {
    this.comicsService.getComics().subscribe((data: ListItemsModel[]) => {
      console.log(data);
      this.store.dispatch(loadComicsSuccess({ comics: data }));
    });
  }
}
