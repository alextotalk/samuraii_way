import React from "react";
import m from "./Foter.module.css"
export function Footer() {
    return (
        <div className={m.footer}>
            <a href="src/components/Footer/Footer#">Home</a>
            <a href="src/components/Footer/Footer#">News</a>
            <a href="src/components/Footer/Footer#">Seeds</a>
        </div>
    );
}