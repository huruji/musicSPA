import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SearchArtistItem extends Component{
  constructor(){
    super();
  }
  render() {
    const {src, img, title} = {...this.props};
    return (
        <Link to={src}>
          <div className="search-artist-item">
            <img src={img} alt=""/>
            <h6>{title}</h6>
          </div>
        </Link>
    )
  }
}

export default SearchArtistItem;