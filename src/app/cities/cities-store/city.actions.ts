import { City } from './../city'
import { Action, createAction, props } from '@ngrx/store'
// export const LoadCities = createAction('[Cities Page] Load Cities', props<{ city: City }>());
// export const LoadCities = createAction('[Cities Page] Load Cities');
export const LoadCitiesSuccess = createAction('[Cities Page] Load Cities Success', props<{ cities: City[] }>())

export enum CitiesActionTypes {
    LoadCities = '[Cities Page] Load Cities',
}
export class LoadCities implements Action {
    readonly type = CitiesActionTypes.LoadCities
}
