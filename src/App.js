import React from 'react';
import './App.css';
import Header from "./modules/Header/Header";
import Sidebar from "./modules/Sidebar/Sidebar";
import Main from "./modules/Main/Main";
import Dialogs from "./modules/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Gallery from "./modules/Gallery/Gallery";
import News from "./modules/News/New";

const App = () => {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
       <Header/>
       <Sidebar/>
       <Route path={`/main`} component={Main}/>
       <Route path={`/dialogs`} component={Dialogs}/>
       <Route path={`/gallery`} component={Gallery}/>
       <Route path={`/news`} component={News}/>
       {/*<Main/>*/}
       {/*<Dialogs/>*/}
    </div>
      </BrowserRouter>
  );
}

export default App;
