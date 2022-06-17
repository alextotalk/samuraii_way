import {ActionsTypes} from "./State";

let initialState:string=''


export const sidebarReducer = (state:string=initialState, action: ActionsTypes) => {
    switch (action.type) {
        default:
            return state
    }
}