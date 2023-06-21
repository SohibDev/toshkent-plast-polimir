import React from "react";
import IBT from '../images/IBT.svg'

const Partenrs = () => {
  return (
    <div className="partners container">
      <ul className="parnters-list">
        <li className="partners-item1">our partners</li>
        <li className="partners-item2">
            <img src={IBT} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Partenrs;
