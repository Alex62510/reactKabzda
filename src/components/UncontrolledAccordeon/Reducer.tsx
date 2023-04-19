export type ActionType = {
    type: string
}
export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"
export type StateType ={
    collapset:boolean
}
export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state,collapset:!state.collapset}
        default:
            throw new Error("Bad action type")
    }
}