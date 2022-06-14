import { PostType } from "../components/Contents/Posts/Posts"

export const dialogsPageReducer = (state: { posts?: PostType[]; newPostText?: string; mewMessageBody?: any; messages?: any }, action: { type: string; newText?: string }) => {
    switch (action.type  ) {
        case (action.type === "UPDATE_MEW_MESSAGE_BODY") :
            state.mewMessageBody = action.newText
            return state

        case (action.type === "ADD_MESSAGE") :
            let numID = state.messages.length + 1
            let newMassager = {id: numID.toString(), massager: state.mewMessageBody}
            state.messages.push(newMassager)
            state.mewMessageBody = ''
            return state

        default:
            return state
    }
}

let UPDATE_MEW_MESSAGE_BODY = "UPDATE_MEW_MESSAGE_BODY"
export let mewMessageBodyAC = (text: string) => ({type: UPDATE_MEW_MESSAGE_BODY, newText: text})


let ADD_MESSAGE = "ADD_MESSAGE"
export let addMessageAC = () => ({type: ADD_MESSAGE})
