import React,{Component} from 'react';

import Msg from './Msg';
import Alert from './Alert';
import Loading from './Loading';
import Iframe from './Iframe';
import Prompt from './Prompt';
import Photo from './Photo';
import Tips from './Tips';
import Music from './Music';

import {defaultConfig, msgConfig, alertConfig, loadingConfig, iframeConfig, photoConfig, promptConfig, tipsConfig, musicConfig} from './config';

class Hlayer extends Component{
  constructor(props){
    super(props);
    this.state = {config:props.config,positionStyle:{},show:true}
  }
  setPosition(){
    const positionType = this.state.config.position;
    const layerHeight = this.hlayer.offsetHeight;
    const layerWidth = this.hlayer.offsetWidth;
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    let positionStyle = {};
    let setTop, setLeft;
    if(positionType === 'random'){
      setTop = Math.floor(Math.random()*(winHeight-layerHeight + 1)) + 'px';
      setLeft = Math.floor(Math.random()*(winWidth - layerWidth) + 1) + 'px';
      positionStyle = {left:setLeft,top: setTop};
    }
    if(positionType === 0) {
      setTop = (winHeight - layerHeight) / 2 + 'px';
      setLeft = (winWidth - layerWidth) / 2 + 'px';
      positionStyle = {left:setLeft,top: setTop};
      console.log(setTop);
    } else if(positionType === 1){
      positionStyle = {left:'0px',top:'0px'};
    } else if(positionType === 2) {
      setTop = '0px';
      setLeft = (winWidth - layerWidth) / 2 + 'px';
      positionStyle = {left:setLeft,top: setTop};
    } else if(positionType === 3) {
      positionStyle = {top:'0px',right:'0px'};
    } else if(positionType === 4) {
      positionStyle = {bottom:'0px',left:'0px'};
    } else if(positionType === 5) {
      setLeft = (winWidth - layerWidth) / 2 + 'px';
      positionStyle = {bottom:'0px',left:setLeft};
    } else if(positionType === 6) {
      positionStyle ={bottom:'0px',right:'0px'};
    }
    this.setState({positionStyle:positionStyle});
  }
  setType(){
    let config = {};
    switch(this.props.type){
      case 'msg':
        config = {...defaultConfig, ...msgConfig.change, ...this.props.config, ...msgConfig.noChange};
        break;
      case 'alert':
        config = {...defaultConfig, ...alertConfig.change, ...this.props.config, ...alertConfig.noChange};
        break;
      case 'loading':
        config = {...defaultConfig, ...loadingConfig.change, ...this.props.config, ...loadingConfig.noChange};
        break;
      case 'iframe':
        config = {...defaultConfig, ...iframeConfig.change, ...this.props.config, ...iframeConfig.noChange};
        break;
      case 'prompt':
        config = {...defaultConfig, ...promptConfig.change, ...this.props.config, ...promptConfig.noChange};
        break;
      case 'photo':
        config = {...defaultConfig, ...photoConfig.change, ...this.props.config, ...photoConfig.noChange};
        break;
      case 'tips':
        config = {...defaultConfig, ...tipsConfig.change, ...this.props.config, ...tipsConfig.noChange};
        break;
      case 'music':
        config = {...defaultConfig, ...musicConfig.change, ...this.props.config, ...musicConfig.noChange};
        break;
    }
    return config;
  }
  setShowShift(time){
    setTimeout(()=> {
      this.setState({show:false});
      if(this.props.handleShow){
        this.props.handleShow(false);
      }
    }, time);
  }
  componentWillMount(){
    const config =this.setType();
    this.setState({config:config});
  }
  componentDidMount(){
    this.setPosition();
    if(this.state.config.time) {
      this.setShowShift(this.state.config.time)
    }
  }
  componetnDidUpdate(){
    this.setPosition();
  }

  render(){
   /* console.log('hlayer props');
    console.log(this.props);*/
    let shadow = null;
    let content = null;
    if(this.state.config.shadow){
      shadow = <div className="hlayer-shadow"></div>
    }
    switch(this.props.type){
      case 'msg':
        content = <Msg {...this.state.config}/>;
        break;
      case 'alert':
        console.log(21312);
        content = <Alert {...this.state.config}/>;
        break;
      case 'loading':
        content = <Loading {...this.state.config}/>;
        break;
      case 'iframe':
        content = <Iframe {...this.state.config}/>;
        break;
      case 'prompt':
        content = <Prompt {...this.state.config}/>;
        break;
      case 'photo':
        content = <Photo {...this.state.config}/>;
        break;
      case 'tips':
        content = <Tips {...this.state.config}/>;
        break;
      case 'music':
        content = <Music{...this.state.config}/>;
        break;
    }
    let hlayerStyle = {width:this.state.config.width,height:this.state.config.height,...this.state.positionStyle};
    if(this.props.type==='loading'){
      hlayerStyle.backgroundColor = 'transparent';
      hlayerStyle.boxShadow = 'none';
    }
    if(this.state.show){
      return(
          <div className="hlayer">
            {shadow}
            <div className={`hlayer-content hlayer-${this.props.type} hlayer-animate${this.state.config.animateType}`} style={hlayerStyle} ref={(hlayer) => this.hlayer = hlayer}>
              {content}
            </div>
          </div>
      )
    } else{
      return null;
    }
  }
}

export default Hlayer;