import React, { Component } from 'react';
import Header from './Containers/Header';
import SiderBar from './Components/SideBar';
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom'
import Routers from './router/Routers';
import PlayListPanel from './Containers/PlayListPanel';
import MusicPanel from './Containers/MusicPanel';
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
