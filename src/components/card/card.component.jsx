import React from "react";
import "./card.style.scss";

export const Card = props => (
  <div className="card">
    <div className="card__image">
      <img src={`https://robohash.org/${props.id}.png?set=set5`} alt="" />
    </div>
    <p>{props.title}</p>
  </div>
);
