import {StoreType} from "../index";
import {v1} from "uuid";
import {renderTree} from "../render";

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
export let addPost = ( ) => {
    let newPost = {id: v1(), massager: store.profilePage.newPostText, likesCount: '443'}
    store.profilePage.posts.push(newPost)
    store.profilePage.newPostText=''
    renderTree(store)
}
export let updateNewPostText = (newText: string) => {
     store.profilePage.newPostText=newText
    renderTree(store)
}