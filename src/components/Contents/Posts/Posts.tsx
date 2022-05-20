import React, {ChangeEvent} from "react";
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

type PostsPropsType = {
    posts: PostType[]
}

export function Posts(props: PostsPropsType) {
    let newPost = ''
    let getNewPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        newPost = e.currentTarget.value
        return newPost
    }
    let addNewPost = (getNewPost: () => void) => {

        return alert(newPost)
    }

    return (
        <div className={m.posts}>
            <div className={m.posts}><img src={Water} alt=""/></div>
            <div>
                <TextArea getNewPost={getNewPost}/>
            </div>
            <div>
                <Button addNewPost={addNewPost} name={"Send"}/>
            </div>
            {props.posts.map((post, i) => <Post key={i} post={post}/>)}
        </div>
    );
}