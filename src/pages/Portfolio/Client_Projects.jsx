import React from 'react';
import './style.css';
import carolinaJoy from './farm-logo.png';
import faColl from './facollectibles-logo-500px.png';
import geminIT from './MMlogoBlackWht.jpg';
import psLogoBlue from './PS-PortraitSticker-BrighterBlue-3399ff.png';
import psLogoRed from './500pxPS-PortraitSticker-Red.png';
import AnntonysOld from './AnntonysOldLogo.png';
import AnntonysNew from './1200px-700res-TM-Revised-Logo.png';
import gemCurrent from './2024LOGO.png'
import gemold1 from './gemold3.png';
import gemold2 from './gemold2.png';
import gemold3 from './gemold4.png';
import gemold4 from './gemold5.png';
import PSpaint from './pattiSelfPrt.png';
import pslogoBW from './sticker-portrait-B&W.png';
import artgal from './ArtistGalLogo.png';
// import agWF from './theartistgalWF1.png';
// import agWF2 from './artistgalWF.png';
// import colors from './ps-colors-fonts.png';
import Carousel from '../../components/Carousel';


export default function Client_Projects() {

  return (
    <div id="clientprojCont">
        <h2 className='portH2' id="LogoDesignh2">Logo Design</h2>
        <h3>From Physical Artwork</h3>
        <div className='row d-flex justify-content-center'>
        <img className="logoimg" src={gemold1} alt="custom logo"/>
        <img className="logoimg" src={gemold2} alt="custom logo"/>
        <img className="logoimg" src={gemold3} alt="custom logo"/>
        <img className="logoimg" src={gemold4} alt="custom logo"/>
        <img className="logoimg" src={gemCurrent} alt="custom logo"/>
        </div>
        <div className='logosec row d-flex justify-content-center'>
        <img className="logoimg" src={PSpaint} alt="custom logo"/>
        <img className="logoimg" src={psLogoBlue} alt="custom logo"/>
        <img className="logoimg" src={psLogoRed} alt="custom logo"/>
        <img className="logoimg" src={pslogoBW} alt="custom logo"/>
        <img className="logolong" src={artgal} alt="custom logo"/>
        </div>

        <h3>Refresh/ Revitalize</h3>
        <div className='logosec row d-flex justify-content-center'>
        <img className="logolong" src={AnntonysOld} alt="custom logo"/>
        <img className="logolong" src={AnntonysNew} alt="custom logo"/>
        </div>
        <h3>Personalized Designs</h3>
        <div className='logosec row d-flex justify-content-center'>
      <img className="logoimg" src={carolinaJoy} alt="custom logo for a farm"/>
      <img className="logoimg" src={geminIT} alt="custom logo"/>
      <img className="logoimg" src={faColl} alt="custom logo"/>
      </div>
        <h2 className='portH2'>Project Example In Depth</h2>
        <br/>
        <button
        id="agSiteBtn"
        type='button'
        onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://www.theartistgal.com/';
        }}>
        View Live Site - The Artist Gal
      </button>
        <Carousel />
    </div>
  );
}