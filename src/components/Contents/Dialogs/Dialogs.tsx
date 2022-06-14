import m from "./Dialogs.module.css"
import {DialogsItems} from "./DialogsItems/DialogsItems";
import {DialogsMessages} from "./DialogsItemsMassagers/DialogsMessages";
import {DialogsPageType} from "../../../Redux/State";
 type DialogsPagePropsType={
    dialogs:DialogsPageType
    dispatch: any

}


export function Dialogs(props: DialogsPagePropsType) {

    return (<div className={m.dialogs}>
        <DialogsItems dialogsItem={props.dialogs.dialogsItem}/>
        <DialogsMessages messages={props.dialogs.messages}
                         mewMessageBody={props.dialogs.mewMessageBody}
                         dispatch={props.dispatch} />

    </div>);
}

