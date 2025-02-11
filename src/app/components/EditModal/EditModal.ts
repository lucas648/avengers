import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { ComicsState } from '../../store/reducers/comics';
import { deleteComic, updateComic } from '../../store/actions/comics';

@Component({
  selector: 'EdditModal',
  templateUrl: './EditModal.html',
  //styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  @Input() item!: ComicsState;

  constructor(public activeModal: NgbActiveModal, private store: Store) {}

  save(): void {
    this.store.dispatch(updateComic({ comic: this.item }));
    this.activeModal.close(this.item);
  }

  delete(): void {
    this.store.dispatch(deleteComic({ comicId: this.item.id }));
    this.activeModal.close();
  }

  dismiss(): void {
    this.activeModal.dismiss();
  }
}