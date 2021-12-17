import { CityService } from './../city-service.service'
import { LoadCities, LoadCitiesSuccess } from './city.actions'
import * as cityActions from './city.actions'

import { mergeMap, map, concatMap, catchError } from 'rxjs'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Injectable } from '@angular/core'
import { City } from '../city'

@Injectable()
export class CityEffects {
  constructor(private actions$: Actions, private cityService: CityService) {}
  LoadCities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadCities),
      mergeMap((action: typeof LoadCities) =>
        this.cityService.getJSON().pipe(map((cities: City[]) => LoadCitiesSuccess({ cities })))
      )
    )
  )
}
