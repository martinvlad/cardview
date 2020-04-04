import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import { StatefulInput } from "baseui/input";
import { Button, SHAPE } from "baseui/button";
import Upload from "baseui/icon/upload";
import Header from "./Header";
import FG from "./FG";
import Calender from "./Calender";
import { Cardbox } from "./components";
import "./App.css";

const Centered = styled("div", {
  display: "flex",
  color: "red",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
});
const ButtonItem = styled("div", {
  backgroundColor: "red",
  textAlign: "right"
});
const engine = new Styletron();

function App() {
  return (
    <div className="App">
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <div style={{ fontFamily: "Titillium Web, sans-serif" }}>
            <Header />
            <FG />
            {/* <Cardbox />
          <Cardbox /> */}
            {/*<Calender />*/}
          </div>
        </BaseProvider>
      </StyletronProvider>
    </div>
  );
}

export default App;
