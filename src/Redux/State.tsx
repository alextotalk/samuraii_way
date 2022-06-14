import {DialogsItemType, MessagesType,} from "../index";
import {v1} from "uuid";
import {PostType} from "../components/Contents/Posts/Posts";
import {profilePageReducer} from "./profilePageReducer";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {sidebarReducer} from "./sidebarReducer";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: string

}
export type DialogsPageType = {
    messages: MessagesType[]
    dialogsItem?: DialogsItemType[]
    mewMessageBody: string

}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string

}

type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscriber: (callback: () => void) => void
    dispatch: any
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', massager: 'Hi!!!', likesCount: '23'},
                {id: '2', massager: 'Hello!!!', likesCount: '23'},
                {id: '3', massager: 'How are you!!!', likesCount: '23'},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages:
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

        },
        sidebar: ''

    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscriber(callback: () => void) {
        this._callSubscriber = callback

    },

    dispatch(action: { type: string; newText?: string; }) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.profilePage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}
