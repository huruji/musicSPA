import React,{Component} from 'react';

class AlbumHeader extends Component{
  render(){
    console.log(this.props);
    return(
        <div className="artist-header clear-float">
          <div className="artist-header-img">
            <img src={this.props.albumInfo.pic_big} alt=""/>
          </div>
          <div className="artist-header-info">
            <div className="artist-header-info-name">
              <p><span style={{backgroundColor: this.props.themeColor}}>专辑</span>{this.props.albumInfo.title}</p>
            </div>
            <ul className="artist-header-info-song">
              <li>
                歌手：{this.props.albumInfo.author}
              </li>
              <li>
                时间：{this.props.albumInfo.publishtime}
              </li>
            </ul>
          </div>
        </div>
    )
  }
}

export default AlbumHeader;