import React from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreLogo from "../assets/owner/more.png";
import "./Hero.css";
import { useState, useEffect } from "react";

const Hero = ({ punkListData, selectedPunk }) => {
  console.log("IN hero selected is", selectedPunk.id);
  console.log("IN hero punkListData is", punkListData);
  const [activePunk, setactivePunk] = useState(punkListData[0]);


  useEffect(() => {
    setactivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  return (
    <div className="heroContainer">
      <div className="punkHighlight">
        <img
          className="selectedPunk"
          src={activePunk.image_original_url}
          alt=""
        />
      </div>

      <div className="punkDetails" style={{ color: "#ffffff" }}>
        <div className="title">{activePunk.name}</div>
        <span className="itemNumber">.#{activePunk.token_id}</span>

        <div className="owner">
          <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} alt="" />
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
