import { CityService } from './../city-service.service';
import { CitiesActionTypes, LoadCitiesSuccess } from './city.actions';
import * as cityActions from './city.actions';

import { mergeMap, map } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { City } from '../city';

@Injectable()
export class CityEffects {
    constructor(private actions$: Actions, private cityService: CityService) {}
    LoadCities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CitiesActionTypes.LoadCities),
            mergeMap((action: cityActions.LoadCities) => this.cityService.getJSON()),
            map((cities: City[]) => LoadCitiesSuccess({ cities })),
        ),
    );
}
