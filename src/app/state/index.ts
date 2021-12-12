import { ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
export interface State {}

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        console.log('state before: ', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
// invoked before any normal reducer
export const metaReducers: MetaReducer<State>[] = !environment.production ? [ logger ] : [];
