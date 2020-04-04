import * as React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import "./FG.css";
import { Cardbox } from "./components";

const data = require("./data.json");
const itemProps = {
  height: "scale1000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "5px"
};

export default function FG() {
  return (
    <div className="padding">
      <FlexGrid
        className="responsive"
        flexGridColumnCount={[2, 3]}
        flexGridRowGap="300px"
      >
        {Object.keys(data).map(v => {
          return (
            <FlexGridItem {...itemProps}>
              <Cardbox
                key={v}
                title={data[v].name}
                text={data[v].desc}
                photo={data[v].img}
                extradesc={data[v].extradesc}
                email={data[v].email}
              />
            </FlexGridItem>
          );
        })}
      </FlexGrid>
    </div>
  );
}
