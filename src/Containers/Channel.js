import React,{Component} from 'react';
import ListHeader from './../Components/ListHeader';
import ListContent from './../Components/ListContent';
import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';
import changeJson from './../utils/changeJson';
import  {fetchChannelList} from './../redux/Channel';
import {connect} from 'react-redux';

class ChannelContainer extends Component{
  constructor(props){
    super(props);
    this.state = {id : this.props.match.params.id}
  }
  componentWillMount(){
    this.props.fetchChannelList(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id != nextProps.match.params.id){
      this.props.fetchChannelList(nextProps.match.params.id);
    }
  }
  render() {
    let {name, avator_url, length, date, comment, song_list, action} = this.props;
    return(
      <div>
        <ListHeader url={avator_url} listName={name} listcnt={length} date={date} comment={comment}/>
        <ListContent listContent={song_list}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const resiveMusic = state.ResiveMusic;
  return {
    avator_url: resiveMusic.avator_url,
    name: resiveMusic.name,
    length: resiveMusic.length,
    date: resiveMusic.date,
    comment: resiveMusic.comment,
    song_list: resiveMusic.song_list
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannelList: (json) => {dispatch(fetchChannelList(json))}
  }
};



export default  connect(mapStateToProps,mapDispatchToProps)(ChannelContainer);