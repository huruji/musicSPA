import React,{Component} from 'react';

class CategorySongHeader extends Component{
  render(){
    return(
        <div className="artist-header clear-float">
          <div className="artist-header-img">
            <img src={this.props.img} alt=""/>
          </div>
          <div className="artist-header-info">
            <div className="artist-header-info-name">
              <p><span style={{backgroundColor: this.props.themeColor}}>频道</span>{this.props.title}</p>
            </div>
          </div>
        </div>
    )
  }
}

export default CategorySongHeader;