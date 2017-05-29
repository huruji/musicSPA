import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CategoryItem extends Component{
  render() {
    return (
        <li style={{float: 'left', width: '16.666666666%',textAlign:'center',marginTop: '15px'}}>
          <Link to={this.props.src}><img src={this.props.img} style={{width:'120px'}} alt=""/></Link>
          <p><Link to={this.props.src} style={{color: '#666',fontSize:'12px'}}>{this.props.title}</Link></p>
        </li>
    )
  }
}

export default CategoryItem;