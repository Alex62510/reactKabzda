import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test("test reducer collapsed should be true",()=>{
const state:StateType={
    collapset:false
}
const newState=reducer(state, {type:TOGGLE_COLLAPSED})

    expect(newState.collapset).toBe(true)
})