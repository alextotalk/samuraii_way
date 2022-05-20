import m from "../Dialogs.module.css";
import React from "react";
 import {ItemsDialogsUser} from "./ItemsDialogsMassager/ItemsDialogsMassager";
import {DialogsItemType} from "../../../../index";
 type DialogsItemsPropsType={
    dialogsItem:DialogsItemType[]
}
export function DialogsItems(props:DialogsItemsPropsType) {
    return (
        <div className={m.dialogsItem}>
            {props.dialogsItem.map((e)=>{

                return <ItemsDialogsUser name={e.name} id={e.id}/>

            })}
         </div>
    );
}