import React from "react";

function SocialMediaButton(props) {
  return (
    <div>
      <a href={props.link} className={props.redes}>
        <i className={props.social}></i>
      </a>
    </div>
  );
}

export default SocialMediaButton;
