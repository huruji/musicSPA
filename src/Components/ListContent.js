import React, {Component} from 'react';
import ListCellView from './ListCellView';

class ListContent extends Component{
  render() {
    const {themeColor, listContent, showDuration, loveSearchList} = {...this.props};
    return(
      <div className="list-content">
        <table>
          <thead>
          <tr style={{borderTopColor: themeColor}}>
            <th>序号</th>
            <th>操作</th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th style={{display: showDuration}}>时长</th>
          </tr>
          </thead>
          <ListCellView list={listContent} showDuration={showDuration} loveSearchList={loveSearchList}/>
        </table>
      </div>
    )
  }
}
export default ListContent;