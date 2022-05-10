import m from "./Dialogs.module.css"
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {DialogsMessages} from "./DialogsItemsMassagers/DialogsMessages";
import {DialogsPageType} from "../../../index";
type DialogsPagePropsType={
    dialogs:DialogsPageType
}


export function Dialogs(props: DialogsPagePropsType) {

    return (<div className={m.dialogs}>
        <DialogsItems dialogsItem={props.dialogs.dialogsItem}/>
        <DialogsMessages messages={props.dialogs.messages}/>

    </div>);
}

