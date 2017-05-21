import {duration} from './time'
export default function changeSongJson(song){
  let song_url = song.bitrate.show_link.replace('http://zhangmenshiting.baidu.com/','http://localhost:4000/');
  song_url = song_url.replace(/\?\w*=\w*/,'');
  console.log('song');
  console.log(song);
  return {
    pic_small: song.songinfo.pic_small,
    pic_big: song.songinfo.pic_big,
    song_url: song_url,
    song_id: song.songinfo.song_id,
    song_title: song.songinfo.title,
    song_author: song.songinfo.author,
    totalTime: song.songinfo.file_duration,
    album_title: song.songinfo.album_title,
    lrclink: song.songinfo.lrclink
  }
}