import { getCitties } from './../../cities-store/index'
import { City } from './../../city'
import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { LoadCities } from '../../cities-store/city.actions'
import { Observable } from 'rxjs'

@Component({
    selector: 'app-cities',
    templateUrl: './cities.component.html',
    styleUrls: [ './cities.component.css' ],
})
export class CitiesComponent implements OnInit {
    cities$: Observable<City[]>

    constructor(private store: Store<City[]>) {}

    ngOnInit(): void {
        this.store.dispatch(new LoadCities())
        this.cities$ = this.store.pipe(select(getCitties))
    }
}
