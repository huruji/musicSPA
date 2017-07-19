import React, { Component } from 'react';
import Header from './Containers/public/Header';
import SiderBar from './Components/SideBar';
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom'
import Routers from './router/Routers';
import PlayListPanel from './Containers/public/PlayListPanel';
import MusicPanel from './Containers/public/MusicPanel';
import './css/main.css';
import './assets/hlayer/hlayer.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="react-main">
          <Header/>
          <SiderBar/>
          <div className="rootContainer">
            <Routers/>
          </div>
          <PlayListPanel/>
          <MusicPanel/>
        </div>
      </Router>
    );
  }
}

export default App;
