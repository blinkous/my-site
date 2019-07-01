import React, { Component } from 'react';
import '../css/diamonds.css';
// import diamonds from '../images/diamonds.svg';

const Diamonds = ({props}) => {
// export default className Diamonds extends Component {
  // render() { 
    return (
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 400" id="diamonds-svg">
        <defs>
          <radialGradient id="upGradient" cx="0.5" cy=".9" r="0.9">
            {/* <stop offset="0%" stopColor="#dcd6ff"/>
            <stop offset="33%" stopColor="#d9bdff"/>
            <stop offset="66%" stopColor="#dabfff"/>
            <stop offset="100%" stopColor="#d9bdff"/> */}
            <stop offset="0%" stopColor="#e7d1ff"/>
            <stop offset="33%" stopColor="#d6c4ff"/>
            <stop offset="66%" stopColor="#cac4ff"/>
            <stop offset="100%" stopColor="#c6b8ff"/>
          </radialGradient>
          <radialGradient id="downGradient" cx="0.5" cy="0.1" r="0.9">
            <stop offset="0%" stopColor="#e7d1ff"/>
            <stop offset="33%" stopColor="#d6c4ff"/>
            <stop offset="66%" stopColor="#cac4ff"/>
            <stop offset="100%" stopColor="#c6b8ff"/>
          </radialGradient>
        </defs>
        <path className="up-tri" d="M60.86 38.28L78.6 65.16H7.63l17.74-26.88L43.12 11.4l17.74 26.88z" id="a"/>
        <path className="down-tri" d="M60.86 97.42L78.6 70.54H7.63l17.74 26.88 17.75 26.88 17.74-26.88z" id="b"/>
        <path className="up-tri" d="M148.07 65.16l24.73 35.59H73.87L98.6 65.16l24.73-35.58 24.74 35.58z" id="c"/>
        <path className="down-tri" d="M148.07 146.78l24.73-35.59H73.87l24.73 35.59 24.73 35.59 24.74-35.59z" id="d"/>
        <path className="down-tri" d="M108.82 32.9l17.74-26.88H55.59L73.33 32.9l17.74 26.88 17.75-26.88z" id="e"/>
        <path className="up-tri" d="M215.11-17.23l23.92 34.81h-95.7l23.93-34.81 23.92-34.81 23.93 34.81z" id="f"/>
        <path className="down-tri" d="M215.11 62.61l23.92-34.81h-95.7l23.93 34.81 23.92 34.81 23.93-34.81z" id="g"/>
        <path className="up-tri" d="M84.57 144.5l19.62 28.8H25.7l19.62-28.8 19.63-28.8 19.62 28.8z" id="h"/>
        <path className="down-tri" d="M84.57 215.93l19.62-28.8H25.7l19.62 28.8 19.63 28.8 19.62-28.8z" id="i"/>
        <path className="up-tri" d="M11.02 101.28l23.93 34.81h-95.7l23.92-34.81 23.93-34.81 23.92 34.81z" id="j"/>
        <path className="down-tri" d="M11.02 181.12l23.93-34.81h-95.7l23.92 34.81 23.93 34.81 23.92-34.81z" id="k"/>
        <path className="up-tri" d="M460 62.68l26.34 45.11H380.97l26.34-45.11 26.34-45.1L460 62.68z" id="l"/>
        <path className="down-tri" d="M460 166.13l26.34-45.11H380.97l26.34 45.11 26.34 45.1 26.35-45.1z" id="m"/>
        <path className="up-tri" d="M217.53 207.09l26.34 45.1H138.49l26.35-45.1 26.34-45.11 26.35 45.11z" id="n"/>
        <path className="down-tri" d="M217.53 310.53l26.34-45.1H138.49l26.35 45.1 26.34 45.11 26.35-45.11z" id="o"/>
        <path className="up-tri" d="M237.96 95.77l17.2 29.3h-68.82l17.21-29.3 17.2-29.3 17.21 29.3z" id="p"/>
        <path className="down-tri" d="M237.96 161.98l17.2-29.29h-68.82l17.21 29.29 17.2 29.3 17.21-29.3z" id="q"/>
        <path className="down-tri" d="M177.74 173.69l8.6-13.44h-34.4l8.6 13.44 8.6 13.44 8.6-13.44z" id="r"/>
        <path className="up-tri" d="M177.74 140.43l8.6 13.44h-34.4l8.6-13.44 8.6-13.44 8.6 13.44z" id="s"/>
        <path className="up-tri" d="M294.09 16.65l20.43 34.32H232.8l20.42-34.32 20.44-34.32 20.43 34.32z" id="t"/>
        <path className="down-tri" d="M294.09 101.77l20.43-34.32H232.8l20.42 34.32 20.44 34.32 20.43-34.32z" id="u"/>
        <path className="down-tri" d="M332.26.92L350-25.97h-70.97L296.77.92l17.75 26.88L332.26.92z" id="v"/>
        <path className="up-tri" d="M367.74 11.4l17.74 26.88h-70.96l17.74-26.88L350-15.48l17.74 26.88z" id="w"/>
        <path className="down-tri" d="M367.74 70.54l17.74-26.88h-70.96l17.74 26.88L350 97.42l17.74-26.88z" id="x"/>
        <path className="up-tri" d="M617.15 37.08l19.62 36.17H558.28l19.62-36.17L597.53.92l19.62 36.16z" id="y"/>
        <path className="down-tri" d="M617.15 116.65l19.62-36.17H558.28l19.62 36.17 19.63 36.16 19.62-36.16z" id="z"/>
        <path className="up-tri" d="M20.16-4.02l11.02 16.94H-12.9L-1.88-4.02 9.14-20.97 20.16-4.02z" id="A"/>
        <path className="down-tri" d="M20.16 33.26l11.02-16.95H-12.9l11.02 16.95L9.14 50.2l11.02-16.94z" id="B"/>
        <path className="up-tri" d="M350.86 115.07l27.96 47.62H266.99l27.95-47.62 27.96-47.62 27.96 47.62z" id="C"/>
        <path className="down-tri" d="M350.86 219.83l27.96-47.62H266.99l27.95 47.62 27.96 47.62 27.96-47.62z" id="D"/>
        <path className="up-tri" d="M412.26 193.01L430 219.89h-70.97l17.74-26.88 17.75-26.88 17.74 26.88z" id="E"/>
        <path className="down-tri" d="M412.26 255.37L430 228.49h-70.97l17.74 26.88 17.75 26.89 17.74-26.89z" id="F"/>
        <path className="up-tri" d="M515.05 9.75l17.75 26.88h-70.97l17.74-26.88 17.74-26.89 17.74 26.89z" id="G"/>
        <path className="down-tri" d="M515.05 68.89L532.8 42h-70.97l17.74 26.89 17.74 26.88 17.74-26.88z" id="H"/>
        <path className="up-tri" d="M521.77 109.5l11.03 19.62h-44.09l11.02-19.62 11.02-19.62 11.02 19.62z" id="I"/>
        <path className="down-tri" d="M521.77 155.71l11.03-19.62h-44.09l11.02 19.62 11.02 19.62 11.02-19.62z" id="J"/>
        <path className="up-tri" d="M454.63 280.05l21.29 35.31h-85.17l21.29-35.31 21.3-35.32 21.29 35.32z" id="K"/>
        <path className="down-tri" d="M454.63 357.74l21.29-35.32h-85.17l21.29 35.32 21.3 35.31 21.29-35.31z" id="L"/>
        <path className="down-tri" d="M154.73 212.83l8.6-13.44h-34.41l8.61 13.44 8.6 13.44 8.6-13.44z" id="M"/>
        <path className="up-tri" d="M154.73 179.57l8.6 13.44h-34.41l8.61-13.44 8.6-13.44 8.6 13.44z" id="N"/>
        <path className="down-tri" d="M378.87 103.39l6.61-9.46H359.03l6.61 9.46 6.62 9.45 6.61-9.45z" id="O"/>
        <path className="up-tri" d="M378.87 79.99l6.61 9.46H359.03l6.61-9.46 6.62-9.45 6.61 9.45z" id="P"/>
        <path className="down-tri" d="M394.95 75.79l5.8-8.77h-23.22l5.8 8.77 5.81 8.77 5.81-8.77z" id="Q"/>
        <path className="up-tri" d="M394.95 54.08l5.8 8.77h-23.22l5.8-8.77 5.81-8.77 5.81 8.77z" id="R"/>
        <path className="down-tri" d="M543.01 99.94l10.22-15.75h-40.86l10.21 15.75 10.22 15.76 10.21-15.76z" id="S"/>
        <path className="up-tri" d="M543.01 64.88l10.22 15.76h-40.86l10.21-15.76 10.22-15.75 10.21 15.75z" id="T"/>
        <path className="down-tri" d="M460.38 23.1l6.61-9.46H440.54l6.61 9.46 6.61 9.45 6.62-9.45z" id="U"/>
        <path className="up-tri" d="M460.38-.3l6.61 9.45H440.54l6.61-9.45 6.61-9.46 6.62 9.46z" id="V"/>
        <path className="down-tri" d="M250.48 8.12l6.62-9.45H230.65l6.61 9.45 6.61 9.46 6.61-9.46z" id="W"/>
        <path className="down-tri" d="M266.67 153.56l4.73-6.01h-18.93l4.73 6.01 4.74 6.01 4.73-6.01z" id="Y"/>
        <path className="up-tri" d="M266.67 138.69l4.73 6.01h-18.93l4.73-6.01 4.74-6 4.73 6z" id="Z"/>
        <path className="down-tri" d="M376.99 138.49l4.73-6.01H362.8l4.73 6.01 4.73 6.01 4.73-6.01z" id="aa"/>
        <path className="up-tri" d="M376.99 123.63l4.73 6H362.8l4.73-6 4.73-6.01 4.73 6.01z" id="ab"/>
        <path className="down-tri" d="M137.53 27.25l4.73-6.01h-18.93l4.73 6.01 4.74 6.01 4.73-6.01z" id="ac"/>
        <path className="up-tri" d="M137.53 12.38l4.73 6.01h-18.93l4.73-6.01 4.74-6 4.73 6z" id="ad"/>
        <path className="down-tri" d="M389.79 156.96l4.73-6h-18.93l4.73 6 4.73 6.01 4.74-6.01z" id="ag"/>
        <path className="up-tri" d="M389.79 142.1l4.73 6.01h-18.93l4.73-6.01 4.73-6.01 4.74 6.01z" id="ah"/>
        <path className="up-tri" d="M260.38 179.87l11.02 19.62h-44.09l11.02-19.62 11.02-19.62 11.03 19.62z" id="ai"/>
        <path className="down-tri" d="M260.38 226.08l11.02-19.62h-44.09l11.02 19.62 11.02 19.62 11.03-19.62z" id="aj"/>
        <path className="down-tri" d="M411.88 24.04L422.9 4.42h-44.08l11.02 19.62 11.02 19.62 11.02-19.62z" id="ak"/>
        <path className="up-tri" d="M565.59-11.71l12.37 19.62h-49.47l12.37-19.62 12.37-19.62 12.36 19.62z" id="al"/>
        <path className="down-tri" d="M565.59 34.5l12.37-19.62h-49.47l12.37 19.62 12.37 19.62 12.36-19.62z" id="am"/>
        <path className="up-tri" d="M506.51 185.49l21.98 32.67H440.54l21.98-32.67 22-32.68 21.99 32.68z" id="an"/>
        <path className="down-tri" d="M506.51 271.05l21.98-32.67H440.54l21.98 32.67 22 32.68 21.99-32.68z" id="ao"/>
        <path className="up-tri" d="M576.02 133.46l17.74 33.41H522.8l17.74-33.41 17.74-33.4 17.74 33.4z" id="ap"/>
        <path className="down-tri" d="M576.02 210.96l17.74-33.4H522.8l17.74 33.4 17.74 33.4 17.74-33.4z" id="aq"/>
        <path className="up-tri" d="M643.66 128.59l12.36 20.88h-49.46l12.36-20.88 12.37-20.88 12.37 20.88z" id="ar"/>
        <path className="down-tri" d="M643.66 177.03l12.36-20.88h-49.46l12.36 20.88 12.37 20.89 12.37-20.89z" id="as"/>
        <path className="down-tri" d="M654.52 21.43l17.74-26.88h-70.97l17.74 26.88 17.74 26.88 17.75-26.88z" id="at"/>
      </svg>
    );
  };
// }

export default Diamonds;