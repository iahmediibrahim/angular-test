import { City } from './../city'
import { Action, createAction, props } from '@ngrx/store'
export const LoadCities = createAction('[Cities Page] Load Cities')
export const LoadCitiesSuccess = createAction('[Cities Page] Load Cities Success', props<{ cities: City[] }>())
export const RemovePopulation = createAction('[City Card] Remove Population', props<{ city: City }>())
export const GrowPopulation = createAction('[City Card] Grow Population', props<{ city: City }>())
export const FilterPopulation = createAction('[City List] Filter Population', props<{ filterByValue }>())
