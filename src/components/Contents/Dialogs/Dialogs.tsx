import m from "./Dialogs.module.css"
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {DialogsMessages} from "./DialogsItemsMassagers/DialogsMessages";

export  type MessagesType = {
    id: string
    massager: string
}
export  type DialogsItemType = {
    id: string
    name: string
}

export function Dialogs() {
    let messages: MessagesType[] = [{id: '1', massager: 'Hi'},
        {id: '2', massager: 'Hi'},
        {id: '3', massager: 'Goodbye'}]
    let dialogsItem: DialogsItemType[] = [
        {id: '1', name: 'Viva'},
        {id: '2', name: 'Alex'},
        {id: '3', name: 'Mila'},]

    return (<div className={m.dialogs}>
        <DialogsItems dialogsItem={dialogsItem}/>
        <DialogsMessages messages={messages}/>

    </div>);
}

