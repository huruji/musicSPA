export default function offsetLeft(ele){
  let left = ele.offsetLeft;
  let parent = ele.offsetParent;
  while(parent){
    left += parent.offsetLeft;
    parent = parent.offsetParent;
  }
  return left;
}