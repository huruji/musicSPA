import React,{Component} from 'react';

class Msg extends Component{
  render(){
    console.log(this.props);
    let icon = null;
    let contentStyle = {textAlign:'center',height: this.props.height,lineHeight:this.props.height};
    if(this.props.icon){
      icon = <div className={`hlayer-icon hlayer-icon${this.props.icon}`} ><i></i></div>
    }
    if(this.props.contentBg){
      contentStyle.backgroundColor = this.props.contentBg;
    }
    if(this.props.contentColor) {
      contentStyle.color = this.props.contentColor;
    }
    if(this.props.icon){
      contentStyle.paddingLeft = '48px';
      contentStyle.width = parseInt(this.props.width) - 48 + 'px';
    }
    return(
        <div className={`hlayer-content-main hlayer-msg-content`} style={{...contentStyle}}>
          {this.props.text}
          {icon}
        </div>
    )
  }
}

export default Msg;