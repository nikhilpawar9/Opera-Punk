import React from "react";
import instagramLogo from'../assets/owner/instagram.png'
import twitterLogo from'../assets/owner/twitter.png'
import moreLogo from '../assets/owner/more.png'
import './Hero.css'

const Hero = () => {
  return (

      <div className="heroContainer">

        <div className="punkHighlight">
            <img
              className="selectedPunk"
              // src={activePunk.image_original_url}
              src="https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=w455"
              alt=""
            />
        </div>

        <div className="punkDetails" style={{ color: "#ffffff" }}>
          {/* <div className="title">{activePunk.name}</div> */}
          <div className="title">Bandana Punk</div>
          <span className="itemNumber">.#3</span>

          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={
                  "https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=w455"
                }
                alt=""
                />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndhandle">
                <div>0x4957487B697F2FfBaEeCaeB85Bd03310f7056e4e</div>
                <div className="ownerHandle">@nikhilpawar9</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerLink">
                <img src={moreLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
  );
};

export default Hero;
