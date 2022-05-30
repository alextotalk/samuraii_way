import {StoreType} from "../index";
import {v1} from "uuid";
let rerenderEntireTree=(store: StoreType)=>{ }
export let store: StoreType = {
    profilePage: {
        posts: [
            {id: '1', massager: 'Hi!!!', likesCount: '23'},
            {id: '2', massager: 'Hello!!!', likesCount: '23'},
            {id: '3', massager: 'How are you!!!', likesCount: '23'},
        ],
        newPostText:''
    },
    dialogsPage: {
        messages: [{id: '1', massager: 'Hi'},
            {id: '2', massager: 'Hi'},
            {id: '3', massager: 'Goodbye'}
        ],
        dialogsItem: [
            {id: '1', name: 'Viva'},
            {id: '2', name: 'Alex'},
            {id: '3', name: 'Mila'},
        ]
    },

}
export const addPost = ( ) => {
    let newPost = {id: v1(), massager: store.profilePage.newPostText, likesCount: '443'}
    store.profilePage.posts.push(newPost)
    store.profilePage.newPostText=''
    rerenderEntireTree(store)
}
export const updateNewPostText = (newText: string) => {
     store.profilePage.newPostText=newText
    rerenderEntireTree(store)
}
export const subscriber=(observer:(store: StoreType) => void)=>{
rerenderEntireTree=observer
}