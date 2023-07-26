import React from 'react';
import '../styles/brand.css';
import google from "../assets/google.png";
import slack from "../assets/slack.png";
import shopify from "../assets/shopify.png";
import atlassian from "../assets/atlassian.png";
import dropbox from "../assets/dropbox.png";





const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="Google" />
      </div>
      <div>
        <img src={slack} alt="Slack" />
      </div>
      <div>
        <img src={shopify} alt="Shopify" />
      </div>
      <div>
        <img src={atlassian} alt="Atlasian" />
      </div>
      <div>
        <img src={dropbox} alt="Dropbox" />
      </div>
    </div>
  )
}

export default Brand