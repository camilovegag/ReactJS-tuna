import React from "react";
import SocialMediaButton from "./buttons/SocialMediaButton";

function Footer() {
  return (
    <footer>
      <div className="socialContainer">
        <SocialMediaButton redes="redes facebook" link="https://facebook.com/tunasabana" social="fab fa-facebook-f" />
        <SocialMediaButton redes="redes twitter" link="https://twitter.com/tunausabana" social="fab fa-twitter" />
        <SocialMediaButton redes="redes instagram" link="https://instagram.com/tunasabana" social="fab fa-instagram" />
        <SocialMediaButton redes="redes youtube" link="https://youtube.com/tunasabana" social="fab fa-youtube" />
      </div>
    </footer>
  );
}

export default Footer;
