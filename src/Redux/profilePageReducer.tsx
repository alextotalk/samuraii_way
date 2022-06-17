import {v1} from "uuid";
import {ActionsTypes, ProfilePageType} from "./State";

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
export type AddPostActionType = ReturnType<typeof addPostAC>
let initialState:ProfilePageType={posts: [
        {id: '1', massager: 'Hi!!!', likesCount: '23'},
        {id: '2', massager: 'Hello!!!', likesCount: '23'},
        {id: '3', massager: 'How are you!!!', likesCount: '23'},
    ],
    newPostText: ''
}

export const profilePageReducer = (state: ProfilePageType=initialState, action: ActionsTypes) => {
    switch (action.type) {
        case  "ADD_POST" :
            let newPost = {id: v1(), massager: state.newPostText, likesCount: '443'}
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case  "UPDATE_NEW_POST_TEXT"  :
            state.newPostText = action.newText
            return state

        default:
            return state
    }
}
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
export let updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text}) as const

const ADD_POST = "ADD_POST"
export let addPostAC = () => ({type: ADD_POST}) as const
