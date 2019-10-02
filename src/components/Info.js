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

import "../App.css";

const Info = () => {
  return (
    <div>
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
        <Parallax speed={27}>
          <img src={Grass} className="Grass" />
          <Parallax speed={4}>
            <img src={Tick} className="Tick" />
          </Parallax>
        </Parallax>
      </section>
    </div>
  );
};

export default Info;
