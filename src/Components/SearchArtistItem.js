import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SearchArtistItem extends Component{
  constructor(){
    super();
  }
  render() {
    return (
        <Link to={this.props.src}>
          <div className="search-artist-item">
            <img src={this.props.img} alt=""/>
            <h6>{this.props.title}</h6>
          </div>
        </Link>
    )
  }
}

export default SearchArtistItem;