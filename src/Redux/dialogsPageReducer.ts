 import {ActionsTypes, DialogsPageType} from "./State";

export type UpdateNewMessageBodyActionType = ReturnType<typeof mewMessageBodyAC>
export type AddMessageActionType = ReturnType<typeof addMessageAC>

let initialState:DialogsPageType={messages:
        [{id: '1', massager: 'Hi'},
            {id: '2', massager: 'Hi'},
            {id: '3', massager: 'Goodbye'}
        ],
    dialogsItem: [
        {id: '1', name: 'Viva'},
        {id: '2', name: 'Alex'},
        {id: '3', name: 'Mila'},
    ],
    mewMessageBody: ''
}

export const dialogsPageReducer = (state: DialogsPageType=initialState, action: ActionsTypes) => {
    switch (action.type) {
        case  "UPDATE_NEW_MESSAGE_BODY"  :
            state.mewMessageBody = action.newText
            return state

        case  "ADD_MESSAGE"  :
            let numID = state.messages.length + 1
            let newMassager = {id: numID.toString(), massager: state.mewMessageBody}
            state.messages.push(newMassager)
            state.mewMessageBody = ''
            return state

        default:
            return state
    }
}

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
export let mewMessageBodyAC = (text: string) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text}) as const


const ADD_MESSAGE = "ADD_MESSAGE"
export let addMessageAC = ()  => ({type: ADD_MESSAGE}) as const
