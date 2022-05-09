import React from "react";
import m from "../../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type PropsItemsDialogsUserType = {
    id: string
    name: string
}

export function ItemsDialogsUser(props: PropsItemsDialogsUserType) {
    let path = "/dialogs/" + props.id

    return (<div className={m.ItemsDialogsMassager}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}