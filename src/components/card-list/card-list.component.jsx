import React from "react";
import "./card-list.styles.scss";
import { Card } from "../card/card.component";

export const CardList = props => (
  <div className="card-list">
    {props.posts.map(post => (
      <Card id={post.id} key={post.id} title={post.title} />
    ))}
  </div>
);
