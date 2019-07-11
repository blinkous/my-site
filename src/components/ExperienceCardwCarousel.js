import React, { Component } from 'react';
import '../css/Card.css';
import Card from './Card';

export default class ExperienceCardwCarousel extends Component {
  state = {  }
  render() { 
    return ( 
      <Card
        myClass={`experienceCardwCarousel ${ this.props.cardCat }`} 
        myID={this.props.myID}
      >
        <div className="titleBar">
          <h4 className="project-title">{this.props.expTitle}</h4>
          <p className="date">{this.props.date}</p>
        </div>

        <div className="leftSide">
          <div id={`${this.props.myID}Carousel`} className="carousel slide" data-ride="carousel" data-touch="true">
            <ol className="carousel-indicators">
              <li data-target={`#${this.props.myID}Carousel`} data-slide-to="0" className="active"></li>
              <li data-target={`#${this.props.myID}Carousel`} data-slide-to="1"></li>
              <li data-target={`#${this.props.myID}Carousel`} data-slide-to="2"></li>
              <li data-target={`#${this.props.myID}Carousel`} data-slide-to="3"></li>
              <li data-target={`#${this.props.myID}Carousel`} data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={this.props.img1} className="d-block" alt={this.props.img1Alt}/>
              </div>
              <div className="carousel-item">
                <img src={this.props.img2} className="d-block" alt={this.props.img2Alt}/>
              </div>
              <div className="carousel-item">
                <img src={this.props.img3} className="d-block" alt={this.props.img3Alt}/>
              </div>
              <div className="carousel-item">
                <img src={this.props.img4} className="d-block" alt={this.props.img4Alt}/>
              </div>
              <div className="carousel-item">
                <img src={this.props.img5} className="d-block" alt={this.props.img5Alt}/>
              </div>
            </div>
            <a className="carousel-control-prev" href={`#${this.props.myID}Carousel`} role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={`#${this.props.myID}Carousel`} role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <div className="rightSide">
          <p className="expDesc">{this.props.desc}</p>
          {this.props.children}
        </div>
      </Card>
    );
  }
}