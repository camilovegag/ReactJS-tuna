import React from "react";
import SocialMediaButton from "./buttons/SocialMediaButton";

function Footer() {
  return (
    <footer>
      <div className="socialContainer">
        <SocialMediaButton />
        <SocialMediaButton />
        <SocialMediaButton />
        <SocialMediaButton />
      </div>
    </footer>
  );
}

export default Footer;
