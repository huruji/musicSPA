import fetchJsonp from 'fetch-jsonp';
import CONFIG from './../config';
import changeJson from './../utils/changeJson';

function getMusic(id, cb){
  const url = `${CONFIG.baseUrl}?${CONFIG.channelMethod}&type=${id}`;
  fetchJsonp(url)
    .then((response) =>(
        response.json()
      )
    ).then((json) => {
    const music = changeJson(json);
    cb(music);
  })
}

export default getMusic;
