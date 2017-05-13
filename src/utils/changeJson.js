export default function(json){
  const billboard = {
    length: json.billboard.billboard_songnum,
    comment: json.billboard.comment,
    name: json.billboard.name,
    date: json.billboard.update_date,
    avator_url: json.billboard.pic_s210
  };
  const song_list = json.song_list;
  return{
    billboard,
    song_list
  }
}