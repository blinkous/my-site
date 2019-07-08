import React, { Component } from 'react';
import '../css/BiggerBubble.css';

export default class BiggerBubble extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="bigger-bubble" id={this.props.myID}>
        <div className="topPortion">
          <div className="titleHolder">
            <h2 id={this.props.myLittleBubbleID}>{this.props.myID}</h2>
          </div>
          <div className="skillsHolder"> 
            <p className="begSkills">
              <span className={this.props.begSkillsTitle}>{this.props.begSkillsTitle} </span>
              {this.props.begSkills}
            </p>
            <p className="medSkills">
              <span className={this.props.medSkillsTitle}>{this.props.medSkillsTitle} </span>
              {this.props.medSkills}
            </p>
            <p className="concepts">
              <span className={this.props.skillsTitle}>{this.props.skillsTitle} </span>
              {this.props.skills}
            </p>
            {/* <p className="skills">
              <span className={this.props.skillsTitle}>{this.props.skillsTitle} </span>
              {this.props.skills}
            </p> */}
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }
}