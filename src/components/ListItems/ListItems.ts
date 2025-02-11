import { Component, Input } from '@angular/core';
import { ListItemsModel } from './Models/ListItemsModel';

@Component({
    standalone: true,
    selector: 'ListItemComponent',
    templateUrl: './listItems.html',
    //styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
    @Input() items!: ListItemsModel[];
}