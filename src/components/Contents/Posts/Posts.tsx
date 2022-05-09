import React from "react";
import m from "./Posts.module.css"
import {Post} from "./Post/Post";
import {Button} from "./Button/Button";
import {TextArea} from "./TextArea/TextArea";
import Water from "../../../images/Water.jpg";

export  type PostType = {
    id: string
    massager: string
    likesCount: string
}

export function Posts() {
    let posts: PostType[] = [
        {id: '1', massager: 'Hi!!!', likesCount: '23'},
        {id: '2', massager: 'Hello!!!', likesCount: '23'},
        {id: '3', massager: 'How are you!!!', likesCount: '23'},
    ]
    return (
        <div className={m.posts}>
            <div className={m.posts}><img src={Water} alt=""/></div>
            <div>
                <TextArea/>
            </div>
            <div>
                <Button name={"Send"}/>
            </div>
            {posts.map(post=><Post post={post}/>)}
        </div>
    );
}