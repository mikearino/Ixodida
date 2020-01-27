import React from "react";
import Parallax from "react-rellax";
import Cloud1 from "./img/cloud1.png";
import Cloud2 from "./img/cloud2.png";
import Cloud3 from "./img/cloud3.jpg";
import Cloud4 from "./img/cloud4.jpg";
import Tree from "./img/tree.png";
import Grass from "./img/grass.png";
import TickInfo from "./img/tickInfo.jpeg";
import Sun from "./img/sun.png";
import NavIcon from "./img/navIcon.png";
import "../App.css";
import Dirt1 from "./img/dirt1.png";
import Dirt2 from "./img/dirt2.png";
import Dirt3 from "./img/dirt3.png";
import Dirt4 from "./img/dirt4.png";
import InfoFoot from "./InfoFoot";

const Info = () => {
  return (
    <div id="infoComponent">
      <section>
        <Parallax speed={20.5}>
          <img src={Sun} className="Sun" alt="sun" />
        </Parallax>
        <Parallax speed={30}>
          <img src={Cloud1} className="Cloud1" alt="cloud" />
        </Parallax>
        <Parallax speed={18}>
          <img src={Dirt4} className="Dirt4" alt="dirt" />
        </Parallax>
        <Parallax speed={10}>
          <img src={Cloud2} className="Cloud2" alt="cloud" />
        </Parallax>
        <Parallax speed={9}>
          <img src={Cloud3} className="Cloud3" alt="cloud" />
        </Parallax>
        <Parallax speed={23}>
          <img src={Cloud4} className="Cloud4" alt="cloud" />
        </Parallax>
        <Parallax speed={25.5}>
          <img src={TickInfo} className="TickInfo" alt="tick info" />
        </Parallax>
        <Parallax speed={32.5}>
          <img src={Grass} className="Grass" alt="grass" />
        </Parallax>
        <Parallax speed={28.5}>
          <img src={Tree} className="Tree" alt="tree" />
        </Parallax>
      </section>

      <section>
        <Parallax speed={46}>
          <img src={NavIcon} className="Tick1" alt="tick" />
        </Parallax>
        <Parallax speed={53}>
          <img src={NavIcon} className="Tick2" alt="tick" />
        </Parallax>
        <Parallax speed={44}>
          <img src={NavIcon} className="Tick3" alt="tick" />
        </Parallax>
        <Parallax speed={40}>
          <img src={NavIcon} className="Tick4" alt="tick" />
        </Parallax>
        <Parallax speed={44}>
          <img src={NavIcon} className="Tick5" alt="tick" />
        </Parallax>
        <Parallax speed={30}>
          <img src={NavIcon} className="Tick6" alt="tick" />
        </Parallax>
        <Parallax speed={36}>
          <img src={NavIcon} className="Tick7" alt="tick" />
        </Parallax>
        <Parallax speed={47}>
          <img src={NavIcon} className="Tick8" alt="tick" />
        </Parallax>
        <Parallax speed={32}>
          <img src={NavIcon} className="Tick9" alt="tick" />
        </Parallax>
        <Parallax speed={38}>
          <img src={NavIcon} className="Tick10" alt="tick" />
        </Parallax>
        <Parallax speed={29}>
          <img src={Dirt1} className="Dirt1" alt="dirt" />
        </Parallax>
        <Parallax speed={11}>
          <img src={Dirt2} className="Dirt2" alt="dirt" />
        </Parallax>
        <Parallax speed={14}>
          <img src={Dirt3} className="Dirt3" alt="dirt" />
        </Parallax>
        <Parallax speed={59}>
          <img src={NavIcon} className="Tick11" alt="tick" />
        </Parallax>
        <Parallax speed={63}>
          <img src={NavIcon} className="Tick12" alt="tick" />
        </Parallax>
        <Parallax speed={66}>
          <img src={NavIcon} className="Tick13" alt="tick" />
        </Parallax>
        <Parallax speed={40}>
          <img src={NavIcon} className="Tick14" alt="tick" />
        </Parallax>
        <Parallax speed={73}>
          <img src={NavIcon} className="Tick15" alt="tick" />
        </Parallax>
        <Parallax speed={85}>
          <img src={NavIcon} className="Tick16" alt="tick" />
        </Parallax>
        <Parallax speed={69}>
          <img src={NavIcon} className="Tick17" alt="tick" />
        </Parallax>
      </section>
      <section>
        <Parallax speed={70}>
          <img src={NavIcon} className="Tick18" alt="tick" />
        </Parallax>
        <Parallax speed={64}>
          <img src={NavIcon} className="Tick19" alt="tick" />
        </Parallax>
        <Parallax speed={63}>
          <img src={NavIcon} className="Tick20" alt="tick" />
        </Parallax>
        <Parallax speed={40}>
          <img src={NavIcon} className="Tick21" alt="tick" />
        </Parallax>
        <Parallax speed={28}>
          <img src={NavIcon} className="Tick22" alt="tick" />
        </Parallax>
        <Parallax speed={33}>
          <img src={NavIcon} className="Tick23" alt="tick" />
        </Parallax>
        <Parallax speed={37}>
          <img src={NavIcon} className="Tick24" alt="tick" />
        </Parallax>
        <Parallax speed={30}>
          <img src={NavIcon} className="Tick25" alt="tick" />
        </Parallax>
      </section>
      <InfoFoot />
    </div>
  );
};

export default Info;
