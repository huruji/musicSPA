import React from 'react';

const initState = {
  pic_small: 'http://musicdata.baidu.com/data2/pic/ab055cc7c59de25a37f06f060ec3bccf/540561450/540561450.jpg@s_0,w_90',
  pic_big: 'http://musicdata.baidu.com/data2/pic/ab055cc7c59de25a37f06f060ec3bccf/540561450/540561450.jpg@s_0,w_150',
  song_url: 'http://zhangmenshiting.baidu.com/data2/music/5d62ab148fc1d5f05c033409b6d07e84/266958163/266958163.mp3?xcode=72fd6c12aef68cd9d7984b79751f9d39',
  song_id: '540560826',
  song_title: '我害怕',
  song_author: '薛之谦',
};

const MusicNow = (state = initState, action) => {
  switch(action.type){
    default:
      return state;
  }
};

export default MusicNow;