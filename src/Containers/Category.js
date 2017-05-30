import React,{Component} from 'react';
import {connect} from 'react-redux';
import CategoryItem from './../Components/CategoryItem';
import {fetchCategory} from './../redux/Category';

class Category extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    console.log(111);
    this.props.fetchCategory();
  }
  render() {
    const {publicList, artistList} = this.props;
    return(
        <div className='category-container' style={{padding: '20px'}}>
          <h6 style={{borderBottom: '1px solid #ccc',height: '32px', lineHeight: '32px', fontSize: '14px'}}>公共频道</h6>
          <ul className="clear-float">
            {
              publicList.map((item, i) => {
                console.log(item);
                return <CategoryItem key={i} src={`/categorysong/${item.ch_name}`} img={'http://musicugc.cdn.qianqian.com/ugcdiy/pic/535ce598ebc9dbd1212a7cdb56060e38.jpg'} title={`${item.cate_sname}:${item.name}`}/>
              })

            }
          </ul>
          <h6 style={{borderBottom: '1px solid #ccc',height: '32px', lineHeight: '32px',fontSize: '14px'}}>音乐人频道</h6>
          <ul className="clear-float">
            {
              artistList.map((item,i) => {
                return <CategoryItem key={i} src={`/artistsong/${item.artistid}`} img={item.avatar} title={item.name}/>
              })
            }
          </ul>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  const category = state.Category;
  return {
    publicList: category.public,
    artistList: category.artist
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategory: ()=> {console.log(111111);dispatch(fetchCategory())}
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Category)

