import React, { Component } from 'react';
import '../css/SkillsDesc.css';

export default class SkillsDesc extends Component{
  render() {
    return(
      <p className="skillDesc">
        <span className={this.props.descTitle}>{this.props.descTitle} </span>
        {this.props.desc}
      </p>
    );
  }
}