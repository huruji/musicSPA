import React,{Component} from 'react';

class ArtistIntro extends Component{
  constructor(){
    super();
  }

  render(){
    console.log(this.props);
    let intro = [], works=[], achievements = [];
    if(this.props.intro){
      const infoArr = this.props.intro.split('\n\n');
      const indexWorks = this.props.intro.indexOf('代表作品\n');
      const indexAchi = this.props.intro.indexOf('主要成就\n');
      intro = this.props.intro.substring(0, indexWorks).split('\n');
      works = this.props.intro.substring(indexWorks, indexAchi).split('\n');
      achievements = this.props.intro.substring(indexAchi).split('\n');
      /*intro = infoArr[0].split('\n');
      works = infoArr[1].split('\n');
      achievements = infoArr[2].split('\n');*/
      console.log(infoArr);
      console.log(intro);
    }

    return(
        <div className="artist-intro">
          <p><b>出生日期：</b>{this.props.birth}</p>
          <p><b>国家(地区)：</b>{this.props.country}</p>
          <p><b>所属公司：</b>{this.props.company}</p>
          <p><b>个人简介：</b></p>
          {
            intro.map((item, i) => {
              if(i > 0){
                return (<p key={i}>{item}</p>)
              }
            })
          }
          <br/>
          <p><b>代表作品：</b></p>
          {
            works.map((item, i) => {
              if(i > 0){
                return (<p key={i}>{item}</p>)
              }
            })
          }
          <br/>
          <p><b>主要成就：</b></p>
          {
            achievements.map((item, i) => {
              if(i > 0){
                return (<p key={i}>{item}</p>)
              }
            })
          }
        </div>
    )
  }
}


export default ArtistIntro;