import React,{Component} from 'react';

class ArtistHeader extends Component{
  render(){
    return(
        <div className="artist-header clear-float">
          <div className="artist-header-img">
            <img src="http://musicdata.baidu.com/data2/pic/246669444/246669444.jpg@s_0,w_180" alt=""/>
          </div>
          <div className="artist-header-info">
            <div className="artist-header-info-name">
              <p><span>歌手</span>周杰伦</p>
              <p>jay</p>
            </div>
            <ul className="artist-header-info-song">
              <li>
                单曲数:989
              </li>
              <li>
                单曲数:989
              </li>
              <li>
                单曲数:989
              </li>
            </ul>
          </div>
        </div>
    )
  }
}

export default ArtistHeader;