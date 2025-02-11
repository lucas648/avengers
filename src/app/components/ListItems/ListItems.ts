import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ComicsState } from '../../store/reducers/comics';

@Component({
  standalone: true,
  selector: 'ListItemComponent',
  templateUrl: './listItems.component.html',
  //styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() items!: ComicsState[];
  @Output() itemClick = new EventEmitter<ComicsState>();

  onItemClick(item: ComicsState): void {
    this.itemClick.emit(item);
  }
}