import React from "react";
import m from "./Posts.module.css"
import {Post} from "./Post/Post";
import {Button} from "./Button/Button";
import {TextArea} from "./TextArea/TextArea";

export function Posts() {
     return (
        <div className={m.Posts}>
            <div>
                <TextArea/>
            </div>
            <div>
                <Button/>
            </div>
            <Post massager={"Hi!!!"} liksCount={"23"}/>
            <Post massager={"Hi my friend !!!"} liksCount={"2"}/>
        </div>
    );
}