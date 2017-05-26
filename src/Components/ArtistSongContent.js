import React, {Component} from 'react';
import ArtistAlbumList from './ArtistAlbumList';
import {Link} from 'react-router-dom';
class ArtistSongContent extends Component{
  render() {
    return(
        <div className="clear-float" style={{margin:'0 20px'}}>
          <div className="album-img-container" >
            <Link to={`/albumsong/${this.props.albumid}`}>
              <img src={this.props.albumimg} alt=""/>
              <p>{this.props.publishtime}</p>
            </Link>
          </div>
        <div className="list-content" style={{float:'left',width:'80%'}}>
          <p><Link to={`/albumsong/${this.props.albumid}`} style={{color:'#333',fontSize: '14px', lineHeight: '28px'}}>{this.props.title}</Link></p>
          <table>
            <thead>
            <tr>
              <th>序号</th>
              <th>操作</th>
              <th>音乐标题</th>
              <th style={{display: this.props.showDuration}}>时长</th>
            </tr>
            </thead>
            <ArtistAlbumList list={this.props.listContent} showDuration={this.props.showDuration} loveSearchList={this.props.loveSearchList}/>
          </table>
        </div>
        </div>
    )
  }
}
export default ArtistSongContent;