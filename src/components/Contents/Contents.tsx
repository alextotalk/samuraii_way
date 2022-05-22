import React  from "react";
import m from "./Contents.module.css"
import {Posts} from "./Posts/Posts";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StoreType} from "../../index";

type ContentsPropsType = {
    state: StoreType
    addPost: () => void
    updateNewPostText: (newText: string) => void

}

export const Contents: React.FC<ContentsPropsType> = (props) => {
    return (
        <div className={m.Contents}>
            <Route
                render={() => <Posts updateNewPostText={props.updateNewPostText} posts={props.state.profilePage.posts}
                                     newPostText={props.state.profilePage.newPostText} addPost={props.addPost}/>}
                path='/posts'></Route>
            <Route render={() => <Dialogs dialogs={props.state.dialogsPage} addPost={props.addPost}/>}
                   path='/dialogs'></Route>
        </div>
    );
}