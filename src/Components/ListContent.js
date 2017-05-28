import React, {Component} from 'react';
import ListCellView from './ListCellView';

class ListContent extends Component{
  render() {
    return(
      <div className="list-content">
        <table>
          <thead>
          <tr style={{borderTopColor: this.props.themeColor}}>
            <th>序号</th>
            <th>操作</th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th style={{display: this.props.showDuration}}>时长</th>
          </tr>
          </thead>
          <ListCellView list={this.props.listContent} showDuration={this.props.showDuration} loveSearchList={this.props.loveSearchList}/>
        </table>
      </div>
    )
  }
}
export default ListContent;