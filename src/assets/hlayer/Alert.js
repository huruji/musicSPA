import React,{Component} from 'react';

class Alert extends Component{
  constructor(){
    super();
  }
  render(){
    console.log('alert props');
    console.log(this.props);
    let icon, titleStyle, contentStyle, btnStyle, btnContainerStyle;
    if(this.props.icon){
      icon = <div className={`hlayer-icon hlayer-icon${this.props.icon}`} ><i></i></div>
    }
    titleStyle = {background: this.props.mainBg,color:this.props.mainColor};
    contentStyle = {background: this.props.contentBg, color: this.props.contentColor, height: `${parseInt(this.props.height) - 82}px`,lineHeight: `${parseInt(this.props.height) - 82}px` };
    if(this.props.icon){
      contentStyle.paddingLeft = '48px';
    }
    btnContainerStyle = {background: this.props.contentBg};
    btnStyle = {background: this.props.mainBg,color:this.props.mainColor};
    return(
       <div>
         <div className="hlayer-content-title hlayer-alert" style={titleStyle}>{this.props.title}</div>
         <div className="hlayer-content-main hlayer-alert-content" style={contentStyle}>
           {this.props.text}
           {icon}
         </div>
         <div className="hlayer-content-btns hlayer-alert-content-btns" style={btnContainerStyle}>
           <span className="hlayer-content-btns-item hlayer-content-btns-item0" style={btnStyle}>确定</span>
         </div>
         <div className="hlayer-close hlayer-alertclose hlayer-close1"></div>
       </div>
    )
  }
}

export default Alert;