import React from 'react'
import "./footer.css"
import youtube_icon from "../../assests/youtube_icon.png"
import facebook_icon from "../../assests/facebook_icon.png"
import instagram_icon from "../../assests/instagram_icon.png"
import twitter_icon from "../../assests/twitter_icon.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={youtube_icon} alt="" />
         <img src={facebook_icon} alt="" />
          <img src={instagram_icon} alt="" />
           <img src={twitter_icon} alt="" />
      </div>
      <ul>
    <li> FAQ</li>
    <li>Help Centre</li>
     <li>Account</li>
          <li>Investor Relations</li>
               <li>Investor Relations</li>
     <li>Jobs</li>
     <li>Ways to Watch</li>
     <li>Terms of Use</li>
          <li>Cookie Preferences</li>
     <li>Corporate Information</li>
        <li>Privacy</li>
           <li>Contact Us</li>
              
  </ul>
  <p className='copyright-text'>  © 1997-2025 StreamFlix, Inc. </p>

    </div>
  )
}

export default Footer
