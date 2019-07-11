import React, { Component } from 'react';
import './css/App.css';
import Diamonds from './components/Diamonds';
import Confetti from './components/confetti';
import MyName from './components/MyName';
import Bubble from './components/Bubble';
import BiggerBubble from './components/BiggerBubble';
import ProgrammerEx from './components/ProgrammerEx';
import NavBar from './components/navbar';
import MyFooter from './components/footer';
// import Card from './components/Card';
// import ExperienceCard from './components/ExperienceCard';
import SkillsDesc from './components/SkillsDesc';
import ExperienceCardwCarousel from './components/ExperienceCardwCarousel';

// Carousel Images
import ExploreEtsy_flyer from './images/ais/ExploreEtsy_flyer.jpg';
import gim1_19_flyer from './images/ais/gim1_19_flyer.jpg';
import gim2_flyer from './images/ais/gim2_flyer.png';
import Etiquette_Workshop_Flyer from './images/ais/Etiquette_Workshop_Flyer.png';
import machine_learning_flyer from './images/ais/machine_learning_flyer.png';

export default class App extends Component {
  // centralizing color control for name and diamond elements
  state = { 
    name: {
      startColor: "#7c8ccf",
      stopColor: "#ac99c7",
    },
    diamonds: {
      outerMostColor: "#c7d2ff",
      outerColorSec: "#d1d2ff",
      innerColorSec: "#d7d4ff",
      innerMostColor: "#f3ebff"
    }
  };

  render() { 
    return ( 
      <React.Fragment> 
        <NavBar />
        <div className="myDiamonds mycontainer">
          <Diamonds
            outerMostColor={this.state.diamonds.outerMostColor}
            outerColorSec={this.state.diamonds.outerColorSec}
            innerColorSec={this.state.diamonds.innerColorSec}
            innerMostColor={this.state.diamonds.innerMostColor}
          />
        </div>

        <div className="confetti-home mycontainer">
          <Confetti/>
        </div>

        <div className="myName mycontainer" id="startchange">
          <MyName 
            startColor={this.state.name.startColor}
            stopColor={this.state.name.stopColor}
          />
          <div id="white-name">
            <MyName />
          </div>
        </div>
        
        <div className="titleBubbles mycontainer">
          <a href="#Programmer">
            <Bubble 
            title="Programmer" 
            myID="bubble1"
          /></a>
          <a href="#Designer">
            <Bubble 
            title="Designer" 
            myID="bubble2"
          /></a>
          <a href="#Crafter">
            <Bubble 
            title="Crafter" 
            myID="bubble3"
          /></a>
        </div>

        <div className="experience mycontainer">
          <div className="myAnchor" id="ProgrammerAnchor"></div>
          <ProgrammerEx
            myID="ProgrammerE"
            myClass="experience"
            myLittleBubbleID="ProgrammerBubble"
            begSkillsTitle="Learning"
            begSkills="React, JavaScript, jQuery, MySQL, SQL, PHP, Bootstrap, Python, Git, Java, Swift, Xcode, Android Studio,"
            medSkillsTitle="Intermediate"
            medSkills="HTML, CSS, C++"
            />

          <div className="myAnchor" id="DesignerAnchor"></div>
          <BiggerBubble
            myID="Designer"
            myClass="experience"
            myLittleBubbleID="DesignerBubble"
            >
            <SkillsDesc 
              descTitle="Skills"
              desc="Graphic Design, Fashion Illustration, Fashion Design, Pattern Making, Draping, Sewing"
            />
            <ExperienceCardwCarousel
              cardCat="designer"
              myID="ais"
              myCarouselID="aisCarousel"
              expTitle="Graphic Designer for AIS"
              date="Apr. 2018 - May 2019"
              desc="Designed flyers, newsletters, apparel, logo, and website using Wix, PowerPoint, and Mailchimp, while ensuring a consistent design theme and branding was exhibited across all distributed media."
              img1={ExploreEtsy_flyer}
              img1Alt="Etsy Flyer"
              img2={gim1_19_flyer}
              img2Alt="GIM Flyer"
              img3={gim2_flyer}
              img3Alt="GIM Flyer"
              img4={Etiquette_Workshop_Flyer}
              img4Alt="Workship Flyer"
              img5={machine_learning_flyer}
              img5Alt="Machine Learning Flyer"
            >
            </ExperienceCardwCarousel>
          </BiggerBubble>

          <div className="myAnchor" id="CrafterAnchor"></div>
          <BiggerBubble
            myID="Crafter"
            myClass="experience"
            myLittleBubbleID="CrafterBubble"
          />
        </div>

        <MyFooter />
      </React.Fragment>
    );
  }
}
