import React, {Component} from 'react';

class CategoryItem extends Component{
  render() {
    return (
        <li>
          <img src={this.props.img} alt=""/>
          <p>{this.props.title}</p>
        </li>
    )
  }
}

export default CategoryItem;