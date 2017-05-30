import React, {Component} from 'react';
import SearchArtistItem from './SearchArtistItem';

class SearchArtist extends Component{
  constructor(){
    super();
  }
  render() {
    let artist = null;
    let album = null;
    const {is_artist, is_album} = {...this.props};
    if(is_artist){
      artist = <SearchArtistItem img={this.props.artist.avatar.small}
                                 title={'歌手：' +this.props.artist.name}
                                  src={`/artistsong/${this.props.artist.ting_uid}`}/>
    }
    if(is_album) {
      album = <SearchArtistItem img={this.props.album.pic_small}
                                title={'专辑：'+this.props.album.title}
                                src={`/albumsong/${this.props.album.album_id}`}/>
    }
    return (
        <div className="search-artist-container" >
          <p className="search-artist-container-title">最佳匹配</p>
          <div className="search-artist-container-items">
          {artist}
          {album}
          </div>
        </div>
    )
  }
}

export default SearchArtist;