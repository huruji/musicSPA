import React, {Component} from 'react';
import ArtistAlbumList from './ArtistAlbumList';

class ArtistSongContent extends Component{
  render() {
    return(
        <div className="clear-float" style={{margin:'0 20px'}}>
          <div className="album-img-container" style={{float:'left',marginTop:'50px', marginRight:'20px',width:'150px'}}>
            <img src={this.props.albumimg} alt=""/>
          </div>
        <div className="list-content" style={{float:'left',width:'80%'}}>
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