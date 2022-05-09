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
type DialogsPagePropsType = {
    dialogsPage:  DialogsPageType
}
type DialogsPageType = {
    messages: MessagesType[]
    dialogsItem: DialogsItemType[]
}

export function Dialogs(props: DialogsPagePropsType) {

    return (<div className={m.dialogs}>
        <DialogsItems dialogsItem={props.dialogsPage.dialogsItem}/>
        <DialogsMessages messages={props.dialogsPage.messages}/>

    </div>);
}

