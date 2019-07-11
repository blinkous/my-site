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
import WebImg from './images/web.png';

// Carousel Images
// ais
import ExploreEtsy_flyer from './images/ais/ExploreEtsy_flyer.jpg';
import gim1_19_flyer from './images/ais/gim1_19_flyer.jpg';
import gim2_flyer from './images/ais/gim2_flyer.png';
import Etiquette_Workshop_Flyer from './images/ais/Etiquette_Workshop_Flyer.png';
import machine_learning_flyer from './images/ais/machine_learning_flyer.png';
// fasion
import bridal_board from './images/fashion/bridal_board.jpeg';
import bridal_back from './images/fashion/bridal_back.jpg';
import bridal_front from './images/fashion/bridal_front.jpg';
import bridal_top_back from './images/fashion/bridal_top_back.jpeg';
import bridal_top_front from './images/fashion/bridal_top_front.jpeg';
// fasion
import zipper_sketch from './images/fashion/zipper_sketch.jpeg';
import zipper_illustration from './images/fashion/zipper_illustration.jpeg';
import zipper_board from './images/fashion/zipper_board.jpeg';
import zipper_front from './images/fashion/zipper_front.jpg';
import zipper_back from './images/fashion/zipper_back.jpg';

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
            <div>
            <ExperienceCardwCarousel
              cardCat="designer"
              myID="ais"
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
              <a href="https://baruchais.wixsite.com/baruchais" target="_blank" rel="noopener noreferrer">
                <img src={WebImg} alt="AIS Website" className="webimg"/></a>
            </ExperienceCardwCarousel>

            <ExperienceCardwCarousel
              cardCat="designer"
              myID="kleinfeld"
              expTitle="Kleinfeld Bridal Contest Runner-Up"
              date="Jun. 2015"
              desc="Designed a bridal gown that was chosen to be constructed for the High School of Fashion Industries' annual bridal contest co-hosted with Kleinfeld. The gown took a few months to complete from design, to draping, to sewing to a final judging at Kleinfeld."
              img1={bridal_board}
              img1Alt="Vision Board with Sketch"
              img2={bridal_top_front}
              img2Alt="Bridal Top Front"
              img3={bridal_top_back}
              img3Alt="Bridal Top Back"
              img4={bridal_front}
              img4Alt="Bridal Front"
              img5={bridal_back}
              img5Alt="Bridal Back"
            >
            </ExperienceCardwCarousel>
            <ExperienceCardwCarousel
              cardCat="designer"
              myID="zipper"
              expTitle="Winner of AGH Trim Lab Zipper Contest"
              date="May. 2015"
              desc="Designed a dress that was chosen for a contest hosted by the AGH Trim Lab featuring students from the High School of Fashion Industries to honor the 100th anniversary of the zipper. From design, draping and construction to a judging at the AGH Trim Lab, the project took a few months to complete. The final design featured a detachable skirt and blouse combo that formed a dress with fully functional zippers."
              img1={zipper_sketch}
              img1Alt="Zipper Submission Sketch"
              img2={zipper_illustration}
              img2Alt="Zipper Colored Fashion Illustration"
              img3={zipper_board}
              img3Alt="Vision Board with Sketch"
              img4={zipper_front}
              img4Alt="Zipper Front"
              img5={zipper_back}
              img5Alt="Zipper Back"
            >
            </ExperienceCardwCarousel>
            </div>
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
