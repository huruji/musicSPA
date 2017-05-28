import React, {Component} from 'react';

class ListHeader extends Component{
  constructor(props){
    super(props);
    this.playAll = this.playAll.bind(this);
  }
  playAll(){
    this.props.playAll();
  }
  render(){
    return(
    <div className="list-header">
      <div className="list-avatar" style={{background: `url(${this.props.url})`}}>
      </div>
      <div className="list-info">
        <div className="list-title">
          <div>
            <span className="list-logo" style={{backgroundColor: this.props.themeColor}}>歌单</span>
            <span className="list-name">{this.props.listName}</span>
          </div>
          <p>{this.props.date}创建</p>
        </div>
        <div className="list-btn">
          <div className="list-playAll">
            <span className="list-text" onClick={this.playAll}>
              <i className="m-icon m-play" style={{color: this.props.themeColor}}></i>
              播放全部
            </span>
            <span className="list-add">+</span>
          </div>
        </div>
        <div className="list-comment">
          <span>简介</span>{this.props.comment}
        </div>
      </div>
      <div className="list-count">
        {this.props.listcnt}
      </div>
    </div>
    );
  }
}


export default ListHeader;