import React,{ Component } from 'react';
import ListHeader from './ListHeader';
import ListContent from './ListContent';

class Channel extends  Component{
  constructor(){
    super();
  }
  render() {
    let {name, bg, length, date, comment, song_list, action} = this.props;
    return(
      <div>
        <ListHeader url={bg} listName={name} listcnt={length} date={date} comment={comment}/>
        <ListContent />
      </div>
    )
  }
}

export default Channel;