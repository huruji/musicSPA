import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => (
  <dl className="sidebar">
    <dt>频道</dt>
    <dd><NavLink to='/channel/1' activeStyle={{color: '#000'}} >新歌榜</NavLink></dd>
    <dd><NavLink to='/channel/2' activeStyle={{color: '#000'}} >热歌榜</NavLink></dd>
    <dd><NavLink to='/channel/6' activeStyle={{color: '#000'}} >KTV热歌榜</NavLink></dd>
    <dd><NavLink to='/channel/7' activeStyle={{color: '#000'}} > 叱咤歌曲榜</NavLink></dd>
    <dd><NavLink to='/channel/8' activeStyle={{color: '#000'}} > Billboard</NavLink></dd>
    <dd><NavLink to='/channel/9' activeStyle={{color: '#000'}} > 雪碧音碰音榜</NavLink></dd>
    <dd><NavLink to='/channel/11' activeStyle={{color: '#000'}} >摇滚榜</NavLink></dd>
    <dd><NavLink to='/channel/12' activeStyle={{color: '#000'}} >爵士</NavLink></dd>
    <dd><NavLink to='/channel/16' activeStyle={{color: '#000'}} >流行</NavLink></dd>
    <dd><NavLink to='/channel/21' activeStyle={{color: '#000'}} >欧美金曲榜</NavLink></dd>
    <dd><NavLink to='/channel/22' activeStyle={{color: '#000'}} >经典老歌榜</NavLink></dd>
    <dd><NavLink to='/channel/23' activeStyle={{color: '#000'}} >情歌对唱榜</NavLink></dd>
    <dd><NavLink to='/channel/24' activeStyle={{color: '#000'}} >影视金曲榜</NavLink></dd>
    <dd><NavLink to='/channel/25' activeStyle={{color: '#000'}} >网络歌曲榜</NavLink></dd>
    <dt>创建的歌单</dt>
    <dd>
      <span className="m-icon m-heart"/>
      <NavLink to='/' activeStyle={{color: '#000'}}>我喜欢的音乐</NavLink>
    </dd>
  </dl>
);

export default SideBar;
