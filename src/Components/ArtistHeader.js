import React,{Component} from 'react';

class ArtistHeader extends Component{
  render(){
    const {avatar_s180,themeColor, name, aliasname, songs_total, albums_total, mv_total} = {...this.props};
    return(
        <div className="artist-header clear-float">
          <div className="artist-header-img">
            <img src={avatar_s180} alt=""/>
          </div>
          <div className="artist-header-info">
            <div className="artist-header-info-name">
              <p><span style={{backgroundColor: themeColor}}>歌手</span>{name}</p>
              <p>{aliasname}</p>
            </div>
            <ul className="artist-header-info-song">
              <li>
                单曲数:{songs_total}
              </li>
              <li>
                专辑数:{albums_total}
              </li>
              <li>
                MV数:{mv_total}
              </li>
            </ul>
          </div>
        </div>
    )
  }
}

export default ArtistHeader;