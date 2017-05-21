const changeLyric = (json) => {
  const lyric = json.lrcContent;
  const lyricArray = lyric.split('\n');
  let lyricContent = [];
  let lyricTime = [];
  lyricArray.forEach((item) => {
    let time = item.match(/\[[\d|\:\.]+\]/g);
    if(!time){
      return;
    }
    time = time[0].replace(/[\[|\]]/g, '');
    let content = item.match(/\].+/);
    if(!content) {
      lyricContent.push(' ');
    } else if(content){
      content = content[0].replace(/^\]/,'');
      lyricContent.push(content);
    }
    time = time.split(':');
    const length = time.length;
    let newTime = 0;
    for(let i = 0; i < length; i++) {
      newTime += Number.parseFloat(time[i]) * Math.pow(60,length - i -1);
    }
    lyricTime.push(newTime);
  });
  console.log(lyricContent);
  console.log(lyricTime);
  return {
    lyricContent,
    lyricTime
  }
};

export default changeLyric;