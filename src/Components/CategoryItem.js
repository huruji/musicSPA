import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CategoryItem extends Component{
  render() {
    const {src, title, img} = {...this.props};
    return (
        <li style={{float: 'left', width: '16.666666666%',textAlign:'center',marginTop: '15px'}}>
          <Link to={src}><img src={img} style={{width:'120px'}} alt=""/></Link>
          <p><Link to={src} style={{color: '#666',fontSize:'12px'}}>{title}</Link></p>
        </li>
    )
  }
}

export default CategoryItem;