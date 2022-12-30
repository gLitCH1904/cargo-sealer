import React from "react";
import Customers from "../../images/customer-icon.svg";
import Thumb from "../../images/thumb-icon.svg";
import Delivery2 from "../../images/delivery2-icon.svg";

function BoxHelper({ icon, title, para }) {
  return (
    <div className="box-helper">
      <img src={icon} alt="" />
      <h3 className="box-helper__title">{title}</h3>
      <p className="box-helper__para">{para}</p>
    </div>
  );
}

function ThreeBoxes3({ bgc, title }) {
  return (
    <div className="three-boxes" style={bgc}>
      <h2 className="three-boxes__title">{title}</h2>
      <div className="three-boxes__row">
        <div className="three-boxes__row--2">
          <BoxHelper
            icon={Customers}
            title="Set Your Own Schedule"
            para="You’re the boss. You can drive with the Cargodealer app at your own time."
          />
          <BoxHelper
            icon={Thumb}
            title="Make Extra Money"
            para="We offer the best payment rates. No subscription or fees. Drive more, Earn more."
          />
        </div>
        <BoxHelper
          icon={Delivery2}
          title="All The Support You Need"
          para="You get turn-by-turn directions and 24/7 support service if you need any help."
        />
      </div>
    </div>
  );
}

export default ThreeBoxes3;
