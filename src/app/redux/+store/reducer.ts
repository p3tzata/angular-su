//Explain: in real scenario, this is root logic. +store have to be in app folder.
interface ICounterStore{
    count: number,
}

//export interface IAppStore {
//    app: (state,action) => ICounterStore
//}

const defaultState:ICounterStore={
    count:0,
}
export function reducerFn (state:ICounterStore=defaultState, action:any) {

    return state;

}

export const reducers= {app: reducerFn}

const exampleOfReducer = [2,3,4,5].reduce( (acc,curentVal) => {return acc+curentVal} ,0);