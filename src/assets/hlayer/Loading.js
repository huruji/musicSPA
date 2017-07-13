import React,{Component} from 'react';

class Loading extends Component{
  constructor(){
    super();
  }
  render(){
    let load;
    const type= this.props.loadingType;
    const color = this.props.loadingColor;
    if(type === 1){
      load = [];
      for(let i = 0; i < 8; i++) {
        load.push(<div style={{backgroundColor: color}}  key={i}></div>)
      }
    } else if(type === 2) {
      load = [];
      for(let i = 0; i < 2; i++) {
        load.push(<div style={{backgroundColor: color}}  key={i}></div>)
      }
    } else if(type === 3) {
      load = [];
      for(let i = 0; i < 5; i++) {
        if(i < 2) {
          load.push(<div style={{borderColor: color}} className={`div${i + 1}`}  key={i}></div>)
        }else {
          load.push(<div style={{backgroundColor: color}} className={`div${i + 1}`}  key={i}></div>)
        }
      }
    } else if(type === 4){
      load = [];
      for(let i = 0; i < 5; i++) {
        load.push(<div style={{backgroundColor: color}} className={`div${i + 1}`}  key={i}></div>)
      }
    }
    return(
        <div className="hlayer-content-main hlayer-loading-content" style={{backgroundColor: 'rgba(0,0,0,0)', height: this.props.height}}>
        <div className={`hlayer-content-load hlayer-content-load${this.props.loadingType}`}>
          {load}
        </div>
        </div>
    )
  }
}

export default Loading;