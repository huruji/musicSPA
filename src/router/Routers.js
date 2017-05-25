import React, {Component} from 'react';
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom';
import ChannelContainer from './../Containers/Channel';
import Search from './../Containers/Search';
import Lyric from './../Containers/Lyric';
import LocalList from './../Containers/LocalList';
import ArtistSong from './../Containers/ArtistSong';

class Routers extends Component{
  render(){
    return(
      <div>
        <Switch style={{height: '100%'}}>
          <Route exact path="/" component={LocalList}/>
          <Route exact path="/search" component={Search}/>
          <Route path="/channel/:id" component={ChannelContainer}/>
          <Route path="/lyric" component={Lyric}/>
          <Route path="/artistsong/:tinguid" component={ArtistSong}/>
        </Switch>
      </div>
    )
  }
}


export default Routers;
