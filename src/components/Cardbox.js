import React, { Component } from "react";
import { Card, StyledBody, StyledAction, StyledThumbnail } from "baseui/card";
import "./Cardbox.css";
import Popup from "../Popup";
const data = require("../data.json");

export const Cardbox = ({ text, title, photo, extradesc, email }) => {
  return (
    <div>
      <Card
        className="hover"
        overrides={{
          Root: {
            style: {
              width: "340px",
              height: "scale1000",
              borderRadius: "30px",
              margin: "100px",
              backgroundColor: "#add8e6"
            }
          }
        }}
        title={title}
      >
        <StyledThumbnail src={photo} />
        <StyledBody>{text}</StyledBody>
        <Popup
          text={text}
          title={title}
          photo={photo}
          extradesc={extradesc}
          email={email}
        />
        <StyledAction></StyledAction>
      </Card>
    </div>
  );
};
