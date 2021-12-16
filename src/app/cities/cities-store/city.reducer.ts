import { LoadCities, LoadCitiesSuccess } from './city.actions'
import { City } from '../city'
import { createReducer, on } from '@ngrx/store'

// identifying the initial state of cities
const initialState: CityState = {
    cities: [],
}

// create interface for the returned state ( how the state of the cities should look like? )
export interface CityState {
    cities: City[]
}

// create the reducer function with strong typing by initial state and the interface of the return state
export const cityReducer = createReducer(
    initialState,
    // on(LoadCities, (state, action) => state),
    on(LoadCitiesSuccess, (state, action) => {
        return {
            cities: action.cities,
        }
    }),
)
