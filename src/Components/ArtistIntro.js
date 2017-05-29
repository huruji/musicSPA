import React,{Component} from 'react';

class ArtistIntro extends Component{
  constructor(){
    super();
  }

  render(){
    const {intro, birth, country, company, } = {...this.props};
    let introContent = [], works=[], achievements = [];
    if(intro){
      const infoArr = intro.split('\n\n');
      const indexWorks = intro.indexOf('代表作品\n');
      const indexAchi = intro.indexOf('主要成就\n');
      introContent = intro.substring(0, indexWorks).split('\n');
      works = intro.substring(indexWorks, indexAchi).split('\n');
      achievements = intro.substring(indexAchi).split('\n');
    }

    return(
        <div className="artist-intro">
          <p><b>出生日期：</b>{birth}</p>
          <p><b>国家(地区)：</b>{country}</p>
          <p><b>所属公司：</b>{company}</p>
          <p><b>个人简介：</b></p>
          {
            introContent.map((item, i) => {
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