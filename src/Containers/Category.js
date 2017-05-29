import React,{Component} from 'react';
import {connect} from 'react-redux';
import CategoryItem from './../Components/CategoryItem';
import {fetchCategory} from './../redux/Category';

class Category extends Component{
  render() {
    let publicList = null, artistList = null;
    return(
        <div className='category-container'>
          <h6>公共频道</h6>
          <ul>
            {publicList}
          </ul>
          <h6>音乐人频道</h6>
          <ul>
            {artistList}
          </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Category)

