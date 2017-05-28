const UPDATECURTHEME = 'UPDATECURTHEME';


const initialState = {
  themes: [
      {color:'#292C31',intro: '酷炫黑'},
      {color:'#C10D0C',intro: '官方红'},
      {color:'#EE97BB',intro: '可爱粉'},
      {color:'#50BBFD',intro: '天空蓝'},
      {color:'#42A263',intro: '清新绿'},
      {color:'#D8AD6C',intro: '土豪金'}
      ],
  curThemeIndex: 1
};

const Setting = (state, action) => {
  if(!state){
    return initialState;
  }
  switch(action.type) {
    case UPDATECURTHEME:
      return {...state, curThemeIndex: action.index};
    default:
      return state;
  }
};


export const updateCurTheme = (index) => {
  return {
    type: UPDATECURTHEME,
    index
  }
};

export default Setting;