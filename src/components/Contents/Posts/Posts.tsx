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
    addPost: ( ) => void
    newPostText:string
    updateNewPostText: (newText: string) => void

}

export function Posts(props: PostsPropsType) {
    let postElements = props.posts.map((post, i) => <Post key={i} post={post}/>)



    let getNewPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPost = e.currentTarget.value
        props.updateNewPostText(newPost)

    }


    let addNewPost = () => {
        props.addPost()
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