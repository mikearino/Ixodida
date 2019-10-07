import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import Rellax from "rellax";
import Parallax from "react-rellax";
import Cloud1 from "./img/cloud1.png";
import Cloud2 from "./img/cloud2.png";
import Cloud3 from "./img/cloud3.jpg";
import Cloud4 from "./img/cloud4.jpg";
import Tree from "./img/tree.png";
import Grass from "./img/grass.png";
import Tick from "./img/tick.png";
import TickMap from "./img/tickMap.jpg";
import TickInfo from "./img/tickInfo.jpeg";
import IG1 from "./img/IG1.png"
import IG2 from "./img/IG2.png"
import IG3 from "./img/IG3.png"
import IG4 from "./img/IG4.png"
import IG5 from "./img/IG5.png"
import IG6 from "./img/IG6.png"
import IG7 from "./img/IG7.png"
import IG8 from "./img/IG8.png"
import IG9 from "./img/IG9.png"
import TickCard from "./img/tickInfo.jpeg"
import NavIcon from "./img/navIcon.png"
import "../App.css";

const Info = () => {
  return (
    <div id="infoComponent">
      <section>
        <Parallax speed={30}>
          <img src={Cloud1} className="Cloud1" />
        </Parallax>
        <Parallax speed={25}>
          <img src={Cloud4} className="Cloud4" />
        </Parallax>
        <Parallax speed={9}>
          <img src={Cloud3} className="Cloud3" />
        </Parallax>
        <Parallax speed={25}>
          <img src={Cloud2} className="Cloud2" />
        </Parallax>
        <Parallax speed={24.5}>
          <img src={Tree} className="Tree" />
        </Parallax>
        <Parallax speed={26.5}>
          <img src={Grass} className="Grass" />
        </Parallax>
        <Parallax speed={26.5}>
          <img src={TickCard} className="TickCard" />
        </Parallax>
        {/* </section>

      <section> */}
        {/* <Parallax speed={25}>
          <img src={IG1} className="IG1" />
        </Parallax>
        <Parallax speed={20}>
          <img src={IG2} className="IG2" />
        </Parallax>
        <Parallax speed={22}>
          <img src={IG3} className="IG3" />
        </Parallax>
        <Parallax speed={21}>
          <img src={IG4} className="IG4" />
        </Parallax>
        <Parallax speed={20}>
          <img src={IG5} className="IG5" />
        </Parallax>
        <Parallax speed={19}>
          <img src={IG6} className="IG6" />
        </Parallax>
        <Parallax speed={18}>
          <img src={IG7} className="IG7" />
        </Parallax>
        <Parallax speed={17}>
          <img src={IG8} className="IG8" />
        </Parallax>
        <Parallax speed={16}>
          <img src={IG9} className="IG9" />
        </Parallax> */}
      </section>











      <section>
        <Parallax speed={59}>
          <img src={NavIcon} className="Tick1" />
        </Parallax>
        <Parallax speed={63}>
          <img src={NavIcon} className="Tick2" />
        </Parallax>
        <Parallax speed={66}>
          <img src={NavIcon} className="Tick3" />
        </Parallax>
        <Parallax speed={40}>
          <img src={NavIcon} className="Tick4" />
        </Parallax>
        <Parallax speed={44}>
          <img src={NavIcon} className="Tick5" />
        </Parallax>
        <Parallax speed={39}>
          <img src={NavIcon} className="Tick6" />
        </Parallax>
        <Parallax speed={46}>
          <img src={NavIcon} className="Tick7" />
        </Parallax>
        <Parallax speed={47}>
          <img src={NavIcon} className="Tick8" />
        </Parallax>
        <Parallax speed={52}>
          <img src={NavIcon} className="Tick9" />
        </Parallax>
        <Parallax speed={56}>
          <img src={NavIcon} className="Tick10" />
        </Parallax>
      </section>
    </div>
  );
};

export default Info;
