import {PostType} from "../components/Contents/Posts/Posts";
import {DialogsItemType, MessagesType} from "../components/Contents/Dialogs/Dialogs";
import {StoreType} from "../index";

export let store: StoreType = {
    profilePage: {
        posts: [
            {id: '1', massager: 'Hi!!!', likesCount: '23'},
            {id: '2', massager: 'Hello!!!', likesCount: '23'},
            {id: '3', massager: 'How are you!!!', likesCount: '23'},
        ]
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
    sidebar:{}
}