import React, {ChangeEvent} from "react";
import m from "./Posts.module.css"
import {Post} from "./Post/Post";
import {Button} from "../../ReusdComponents/Button/Button";
import {TextArea} from "../../ReusdComponents/TextArea/TextArea";
import Water from "../../../images/Water.jpg";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profilePageReducer";

export  type PostType = {
    id: string
    massager: string
    likesCount: string
}

type PostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: any
}

export function Posts(props: PostsPropsType) {
    let postElements = props.posts.map((post, i) => <Post key={i} post={post}/>)


    let getNewPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }
    let addNewPost = () => {
        props.dispatch(addPostAC())
    }
    return (
        <div className={m.posts}>
            <div className={m.posts}><img src={Water} alt=""/></div>
            <div>
                <TextArea newText={props.newPostText} getNewPost={getNewPost}/>
            </div>
            <div>
                <Button addNewPost={addNewPost} name={"Send"}/>
            </div>
            {postElements}
        </div>
    );
}