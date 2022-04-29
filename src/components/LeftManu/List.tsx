import React from "react";
import m from "./List.module.css"
export function List() {
    return (
        <div className={m.widget}>
            {/*<h3>Категории</h3>*/}
            <ul>
                <li><a href="">Profile</a></li>
                <li><a href="">Massager</a></li>
                <li><a href="">News</a></li>
                <li><a href="">Music</a></li>
                <li><a href="">Settings</a></li>
            </ul>
        </div>
    );
}