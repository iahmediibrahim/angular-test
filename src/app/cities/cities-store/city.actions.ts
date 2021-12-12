import { City } from './../city';
import { Action, createAction, props } from '@ngrx/store';
// export const LoadCities = createAction('[Login Page] User Login', props<{ user: City }>());
// export const LoadCities = createAction('[Cities Page] Load Cities');
export const LoadCitiesSuccess = createAction('[Cities Page] Load Cities', props<{ cities: City[] }>());

export enum CitiesActionTypes {
    LoadCities = '[Product] Toggle Product Code',
}
export class LoadCities implements Action {
    readonly type = CitiesActionTypes.LoadCities;
}
