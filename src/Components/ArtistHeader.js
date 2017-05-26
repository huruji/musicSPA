import React,{Component} from 'react';

class ArtistHeader extends Component{
  render(){
    console.log(this.props);
    return(
        <div className="artist-header clear-float">
          <div className="artist-header-img">
            <img src={this.props.avatar_s180} alt=""/>
          </div>
          <div className="artist-header-info">
            <div className="artist-header-info-name">
              <p><span>歌手</span>{this.props.name}</p>
              <p>{this.props.aliasname}</p>
            </div>
            <ul className="artist-header-info-song">
              <li>
                单曲数:{this.props.songs_total}
              </li>
              <li>
                专辑数:{this.props.albums_total}
              </li>
              <li>
                MV数:{this.props.mv_total}
              </li>
            </ul>
          </div>
        </div>
    )
  }
}

export default ArtistHeader;