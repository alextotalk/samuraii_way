import {v1} from "uuid";

export const profilePageReducer= (state: { posts: any; newPostText: any }, action: { type: string; newText?: string })=>{
    switch (action.type) {
        case (action.type === "ADD_POST") :
            let newPost = {id: v1(), massager:state.newPostText, likesCount: '443'}
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case (action.type === "UPDATE_NEW_POST_TEXT") :
             state.newPostText = action.newText
            return state

        default:
            return state
    }
}
let UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
export let updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

let ADD_POST = "ADD_POST"
export let addPostAC = () => ({type: ADD_POST})
