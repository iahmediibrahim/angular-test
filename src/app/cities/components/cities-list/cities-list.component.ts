import { City } from './../../city';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: [ './cities-list.component.css' ],
})
export class CitiesListComponent implements OnInit {
    // @Input() cities: City[];

    // @Output()   = new EventEmitter();

    constructor() {}

    ngOnInit() {}
}
