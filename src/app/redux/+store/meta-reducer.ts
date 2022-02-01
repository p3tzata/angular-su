import { Action, ActionReducer, MetaReducer } from "@ngrx/store";
import { clearAppState } from "./reducer/user/user.action";

//Explain: with meta reducer we can control top level of state.

function clearAppStateMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {

    return function(state: any, action: Action) {
        //debugger;
        if (action.type==clearAppState.type) {
            return reducer(undefined, action);
        }

        return reducer(state, action);

    }


}

export const metaReducers: MetaReducer<any>[] = [clearAppStateMetaReducer];