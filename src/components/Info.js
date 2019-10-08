import React from "react";
import { Container, Card, CardColumns } from "react-bootstrap";
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
import Sun from "./img/sun.png";
// import TickCard from "./img/tickInfo.jpeg"
import NavIcon from "./img/navIcon.png";
import Dirt from "./img/dirt.png";
import "../App.css";
import Dirt1 from "./img/dirt1.png";
import Dirt2 from "./img/dirt2.png";
import Dirt3 from "./img/dirt3.png";
import Dirt4 from "./img/dirt4.png";

const Info = () => {
  return (
    <div id="infoComponent">
      <section>
        <Parallax speed={20.5}>
          <img src={Sun} className="Sun" />
        </Parallax>
        <Parallax speed={30}>
          <img src={Cloud1} className="Cloud1" />
        </Parallax>
        <Parallax speed={18}>
          <img src={Dirt4} className="Dirt4" />
        </Parallax>
        <Parallax speed={10}>
          <img src={Cloud2} className="Cloud2" />
        </Parallax>
        <Parallax speed={9}>
          <img src={Cloud3} className="Cloud3" />
        </Parallax>
        <Parallax speed={23}>
          <img src={Cloud4} className="Cloud4" />
        </Parallax>
        <Parallax speed={25.5}>
          <img src={TickInfo} className="TickInfo" />
        </Parallax>
        <Parallax speed={32.5}>
          <img src={Grass} className="Grass" />
        </Parallax>
        <Parallax speed={28.5}>
          <img src={Tree} className="Tree" />
        </Parallax>
      </section>

      <section>
        <Parallax speed={46}>
          <img src={NavIcon} className="Tick1" />
        </Parallax>
        <Parallax speed={53}>
          <img src={NavIcon} className="Tick2" />
        </Parallax>
        <Parallax speed={44}>
          <img src={NavIcon} className="Tick3" />
        </Parallax>
        <Parallax speed={40}>
          <img src={NavIcon} className="Tick4" />
        </Parallax>
        <Parallax speed={44}>
          <img src={NavIcon} className="Tick5" />
        </Parallax>
        <Parallax speed={30}>
          <img src={NavIcon} className="Tick6" />
        </Parallax>
        <Parallax speed={36}>
          <img src={NavIcon} className="Tick7" />
        </Parallax>
        <Parallax speed={47}>
          <img src={NavIcon} className="Tick8" />
        </Parallax>
        <Parallax speed={32}>
          <img src={NavIcon} className="Tick9" />
        </Parallax>
        <Parallax speed={38}>
          <img src={NavIcon} className="Tick10" />
        </Parallax>
        <Parallax speed={29}>
          <img src={Dirt1} className="Dirt1" />
        </Parallax>
        <Parallax speed={11}>
          <img src={Dirt2} className="Dirt2" />
        </Parallax>
        <Parallax speed={14}>
          <img src={Dirt3} className="Dirt3" />
        </Parallax>
        <Parallax speed={59}>
          <img src={NavIcon} className="Tick11" />
        </Parallax>
        <Parallax speed={63}>
          <img src={NavIcon} className="Tick12" />
        </Parallax>
        <Parallax speed={66}>
          <img src={NavIcon} className="Tick13" />
        </Parallax>
        <Parallax speed={40}>
          <img src={NavIcon} className="Tick14" />
        </Parallax>
        <Parallax speed={73}>
          <img src={NavIcon} className="Tick15" />
        </Parallax>
        <Parallax speed={85}>
          <img src={NavIcon} className="Tick16" />
        </Parallax>
        <Parallax speed={69}>
          <img src={NavIcon} className="Tick17" />
        </Parallax>
      </section>
      <section>
        <Parallax speed={70}>
          <img src={NavIcon} className="Tick18" />
        </Parallax>
        <Parallax speed={64}>
          <img src={NavIcon} className="Tick19" />
        </Parallax>
        <Parallax speed={63}>
          <img src={NavIcon} className="Tick20" />
        </Parallax>
        <Parallax speed={40}>
          <img src={NavIcon} className="Tick21" />
        </Parallax>
        <Parallax speed={28}>
          <img src={NavIcon} className="Tick22" />
        </Parallax>
        <Parallax speed={33}>
          <img src={NavIcon} className="Tick23" />
        </Parallax>
        <Parallax speed={37}>
          <img src={NavIcon} className="Tick24" />
        </Parallax>
        <Parallax speed={30}>
          <img src={NavIcon} className="Tick25" />
        </Parallax>
        {/*
        <Parallax speed={31}>
        <img src={NavIcon} className="Tick26" />
        </Parallax>
        <Parallax speed={41.5}>
        <img src={NavIcon} className="Tick27" />
        </Parallax>
        <Parallax speed={29.5}>
        <img src={NavIcon} className="Tick28" />
        </Parallax>
        <Parallax speed={31.5}>
        <img src={NavIcon} className="Tick29" />
        </Parallax>
        <Parallax speed={39.5}>
        <img src={NavIcon} className="Tick30" />
        </Parallax>
        <Parallax speed={20.5}>
        <img src={NavIcon} className="Tick31" />
        </Parallax>
        <Parallax speed={33}>
        <img src={NavIcon} className="Tick32" />
        </Parallax>
        <Parallax speed={34}>
        <img src={NavIcon} className="Tick33" />
        </Parallax>
        <Parallax speed={36}>
        <img src={NavIcon} className="Tick34" />
        </Parallax>
        <Parallax speed={35}>
        <img src={NavIcon} className="Tick35" />
        </Parallax>
        <Parallax speed={38}>
        <img src={NavIcon} className="Tick36" />
        </Parallax>
        <Parallax speed={37}>
        <img src={NavIcon} className="Tick37" />
        </Parallax>
        <Parallax speed={40}>
        <img src={NavIcon} className="Tick38" />
        </Parallax>
        <Parallax speed={38.5}>
        <img src={NavIcon} className="Tick39" />
        </Parallax>
        <Parallax speed={33.8}>
        <img src={NavIcon} className="Tick40" />
      </Parallax>  */}
      </section>
    </div>
  );
};

export default Info;
