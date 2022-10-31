import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Maalibaba.in</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Maalibaba</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/maalibaba.in">Instagram</a>
        <a href="https://youtube.com/channel/UCsIB0dL8WbRcB4k-g7BN-gg">Youtube</a>
        <a href="https://www.facebook.com/Maalibaba-109833078533801">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
