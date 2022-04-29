import React from "react";
import m from "../../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export function ItemsDialogsMassager(props:any) {
    let path="/dialogs/"+props.id

    return (<div className={m.ItemsDialogsMassager}>
            <NavLink to={path} >
                {props.name}
            </NavLink>
        </div>
    );
}