import React from 'react';
import './App.css';
import Header from "./modules/Header/Header";
import Sidebar from "./modules/Sidebar/Sidebar";
import Main from "./modules/Main/Main";
import Dialogs from "./modules/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Gallery from "./modules/Gallery/Gallery";
import News from "./modules/News/New";

const App = (props) => {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
       <Header/>
       <Sidebar/>
       <Route path={`/main`} component={ ()=> <Main state = {props.state.postPage}/>}/>
       <Route path={`/dialogs`} render={ ()=> <Dialogs state = {props.state.dialogsPage}/> }/>
       <Route path={`/gallery`} render={ ()=> <Gallery/> }/>
       <Route path={`/news`} component={ ()=> <News/> }/>
    </div>
      </BrowserRouter>
  );
}

export default App;
