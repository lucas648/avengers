import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListItemComponent } from './components/ListItems/ListItems';
import { StoreModule } from '@ngrx/store';
import { comicsReducer } from './store/reducers/comics';
import { CommonModule } from '@angular/common';
import { EditModalComponent } from './components/EditModal/EditModal';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    EditModalComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({ comics: comicsReducer }),
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }