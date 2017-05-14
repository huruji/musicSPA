export function duration(time){
  time = Number.parseInt(time);
  if(time < 60){
    return time > 9 ? `00:${time}` : `00:0${time}`;
  } else if(time > 60) {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    min = min > 9 ? min+'' : '0' + min;
    sec = sec > 9 ? sec+'' : '0' + sec;
    return `${min}:${sec}`;
  }
}