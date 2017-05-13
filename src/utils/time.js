export function duration(time){
  time = Number(time);
  console.log(time > 60);
  if(time < 60){
    return '00:' + time;
  } else if(time > 60) {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    min = min > 9 ? min+'' : '0' + min;
    sec = sec > 9 ? sec+'' : '0' + sec;
    return `${min}:${sec}`;
  }
}