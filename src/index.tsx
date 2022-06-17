import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./Redux/reduxStore";

export type RootState = ReturnType<typeof store.getState>


let renderTree = (state: RootState) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}/>
            </BrowserRouter>
        </React.StrictMode>,

        document.getElementById('root')
    );
}
renderTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
})
