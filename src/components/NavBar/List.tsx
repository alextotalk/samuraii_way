import React from "react";
import m from "./List.module.css"
import {NavLink} from "react-router-dom";
export function List() {
    return (
        <div className={m.widget}>
             <ul>
                <li><NavLink   to="/posts" activeClassName={m.active}>Profile</NavLink></li>
                <li><NavLink   to="/dialogs">Massager</NavLink></li>
                <li><a href="">News</a></li>
                <li><a href="">Music</a></li>
                <li><a href="">Settings</a></li>
            </ul>
        </div>
    );
}