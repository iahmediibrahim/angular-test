import { LoadCities, LoadCitiesSuccess, RemovePopulation, GrowPopulation, FilterPopulation } from './city.actions'
import { City } from '../city'
import { createReducer, on } from '@ngrx/store'

// identifying the initial state of cities
const initialState: CityState = {
  cities: []
}

// create interface for the returned state ( how the state of the cities should look like? )
export interface CityState {
  cities: City[]
}

// create the reducer function with strong typing by initial state and the interface of the return state
export const cityReducer = createReducer(
  initialState,
  on(LoadCitiesSuccess, (state, action) => {
    return {
      cities: action.cities
    }
  }),
  on(RemovePopulation, (state, action) => {
    const cities = state.cities.map((city) => {
      if (city.CityName === action.city.CityName) {
        const newPopulation = city.Population - 5000000
        return { ...city, Population: newPopulation }
      } else {
        return city
      }
    })

    console.log('citiessssss: ' + cities)
    return {
      cities
    }
  }),
  on(GrowPopulation, (state, action) => {
    const cities = state.cities.map((city) => {
      if (city.CityName === action.city.CityName) {
        const newPopulation = city.Population + 1000000
        return { ...city, Population: newPopulation }
      } else {
        return city
      }
    })
    return {
      cities
    }
  }),
  on(FilterPopulation, (state, action) => {
    const cities = state.cities.filter((city) => (city.Population >= action.filterByValue ? city : null))
    return {
      cities
    }
  })
)
