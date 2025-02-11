import { Component, Input } from '@angular/core';
import { ComicsState } from '../../store/reducers/comics';

@Component({
    standalone: true,
    selector: 'ListItemComponent',
    templateUrl: './listItems.html',
    //styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
    @Input() items!: ComicsState[];
}