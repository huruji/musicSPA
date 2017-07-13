export const defaultConfig = {
  type:'msg',
  mainBg:'#169FE6',
  mainColor: '#fff',
  contentBg:'#fff',
  contentColor:'#000',
  title: '信息',
  text: '提示信息',
  width: '',
  height: '',
  btns:'',
  confirmBtn: true,
  confirmCb: false,
  cancelBtn: false,
  cancelCb: false,
  animateType: 1,
  resize:true,
  position: 0,
  shadow:true,
  time: false,
  loadingType:1,
  closeBtn:false,
  url:false,
  formType:1,
  move:true,
  photos:false,
  closeType:1,
  tipsPosition:'right',
  tipsCon:'',
  autoPlay:false,
  playTime:5000,
  allowEmpty:true
};

export const msgConfig = {
  noChange:{
    title:false,
    btn:false
  },
  change:{
    icon:false,time:2000,height:'50px'
  }
};

export const alertConfig = {
  noChange:{

  },
  change:{
    icon:false,
    height:'148px',
    width:'260px',
    closeBtn:true
  }
};

export const loadingConfig = {
  nochange:{
    icon:false,
    title:false,
    btn:false,
    text:false
  },
  change:{
    height:'100px',
    width:'100px',
    time:2000,
    shadow:false,
    loadingColor:'#169fe6'
  }
};

export const iframeConfig = {
  nochange:{
    icon:false,
    btn:false,
    text:false
  },
  change:{
    height:'500px',
    width:'700px',
    time:false,
    shadow:false,
    closeBtn:true,
    url:'http://ce.sysu.edu.cn/hope/'
  }
};

export const promptConfig = {
  nochange:{
    icon:false
  },
  change:{
    height:'160px',
    width:'270px',
    time:false,
    shadow:false,
    closeBtn:true,
    confirmCb:false
  }
};

export const photoConfig = {
  nochange:{
    icon:false,
    move:false,
    title:false,
    closeBtn:true,
    text:false,
    closeType:2
  },
  change:{
    time:false,
    shadow:true,
    animateType:3
  }
};

export const tipsConfig = {
  nochange:{
    move:false,
    title:false,
    closeBtn:false,
    shadow:false
  },
  change:{
    time:1000,
    shadow:true,
    animateType:3,
    icon:false,
    height:'40px',
    position:'right'
  }
};

export const musicConfig = {
  nochange:{
    icon:false
  },
  change:{
    time:false,
    shadow:false,
    closeBtn:1,
    animateType:3,
    height:'142px',
    width:'320px',
    text:false,
    autoPlay:true
  }
};