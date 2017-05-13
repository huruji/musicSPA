import React, {Component} from 'react';
import ListCellView from './ListCellView';

class ListContent extends Component{
  render() {
    return(
      <div className="list-content">
        <table>
          <thead>
          <tr>
            <th>序号</th>
            <th>操作</th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
          </tr>
          </thead>
          <ListCellView list={this.props.listContent}/>
        </table>
      </div>
    )
  }
}
export default ListContent;