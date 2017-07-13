import React, { Component } from 'react';
import logo from './logo.svg';
import Hlayer from './Hlayer';

class App extends Component {
  constructor(){
    super();
    this.state = {msgshow:false,alertshow:false, loadingshow:false};
    this.handleMsgShow = this.handleMsgShow.bind(this);
    this.handleAlertShow = this.handleAlertShow.bind(this);
    this.handleLoadingShow = this.handleLoadingShow.bind(this);
  }
  handleMsgShow(show){
    this.setState({msgshow: show});
  }
  handleAlertShow(show){
    this.setState({alertshow: show});
  }
  handleLoadingShow(show){
    this.setState({loadingshow: show});
  }
  render() {
    const inputStyle = {height: '50px', padding: '10px', background: '#fff', minWidth: '100px', cursor: 'pointer', fontSize: '14px', margin: '20px 20px 0 0', borderRadius: '2px', border: '1px solid #aaa',};
    let lay = null, alertlay=null, loadinglay;
    if(this.state.msgshow){
      lay=<Hlayer type="msg" handleShow={this.handleMsgShow} config = {{contentBg: '#169fe6' ,contentColor:"#fff" ,animateType:4, position: 3, shadow: false, text:'追风少年',   time: 30000, icon:4,}}/>
    }
    if(this.state.alertshow){
      alertlay=<Hlayer type="alert" handleShow={this.handleAlertShow} config = {{contentBg: '#982a2a' ,contentColor:"#fff" ,animateType:4, position: 0, shadow: false, text:'追风少年',   time: 4000, icon:4,}}/>
    }
    if(this.state.loadingshow){
      loadinglay=<Hlayer type="loading" handleShow={this.handleLoadingShow} config = {{animateType:4, position: 0, shadow: false,    time: 4000, loadingType: 4}}/>
    }
    return (
      <div className="App">
        <input style={inputStyle} value="Msg" type="button" onClick={()=>{this.setState((prevState) => ({msgshow: true}))}}/>
        {lay}
        {alertlay}
        {loadinglay}
        <input style={inputStyle} type="button" value="alert"  onClick={()=>{this.setState((prevState) => ({alertshow: true}))}}/>
        <input style={inputStyle} type="button" value="loading"  onClick={()=>{this.setState((prevState) => ({loadingshow: true}))}}/>
      </div>
    );
  }
}

export default App;
