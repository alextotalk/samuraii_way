import React from "react";
import m from "./Header.module.css"

export function Header() {
    return (
        <div className={m.header}>
            <a href="src/components/Header/Header#">
                <img
                    className={m.logo}
                    src="https://upload.wikimedia.org/wikipedia/commons/1/14/Free_%28Logo%29.png" alt="logo"/>
            </a>
        </div>
    );
}
