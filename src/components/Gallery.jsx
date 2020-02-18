import React from "react";
import Title from "./Title";
import Img from "./Img";
import Gal1 from "../images/gal1.jpg";
import Gal2 from "../images/gal2.png";
import Gal3 from "../images/gal3.jpg";
import Gal4 from "../images/gal4.jpg";
import Gal5 from "../images/gal5.jpg";
import Gal6 from "../images/gal6.jpg";
import Gal7 from "../images/gal7.jpg";
import Gal8 from "../images/gal8.jpg";
import Gal9 from "../images/gal9.jpg";

function Gallery() {
    return(
        <div className="contGal">
            <Title className="galTitle" texto="Galería" />
            <table className="tabla">
        <tr className="tr">
          <td>
            <Img src={Gal1} />
          </td>
          <td>
            <Img src={Gal2} />
          </td>
          <td>
            <Img src={Gal3} />
          </td>
        </tr>
        <br />
        <tr className="tr">
          <td>
            <Img src={Gal4} />
          </td>
          <td>
            <Img src={Gal5} />
          </td>
          <td>
            <Img src={Gal6} />
          </td>
        </tr>
        <br />
        <tr className="tr">
          <td>
            <Img src={Gal7} />
          </td>
          <td>
            <Img src={Gal8} />
          </td>
          <td>
            <Img src={Gal9} />
          </td>
        </tr>
      </table>
        </div>
    );
}

export default Gallery;