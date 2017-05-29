import React,{Component} from 'react';

class CategorySongHeader extends Component{
  render(){
    const {img, title, themeColor} = {...this.props};
    return(
        <div className="artist-header clear-float">
          <div className="artist-header-img">
            <img src={img} alt=""/>
          </div>
          <div className="artist-header-info">
            <div className="artist-header-info-name">
              <p><span style={{backgroundColor: themeColor}}>频道</span>{title}</p>
            </div>
          </div>
        </div>
    )
  }
}

export default CategorySongHeader;