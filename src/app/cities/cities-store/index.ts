import * as fromRoot from '../../state/'
import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CityState } from './city.reducer'

// extending the Root state to add the lazy loaded products module state
export interface State extends fromRoot.State {
    cities: CityState
}

// create the main feature selector
const getCityFeatureState = createFeatureSelector<CityState>('cities')
export const getCitties = createSelector(getCityFeatureState, (state) => state.cities)
