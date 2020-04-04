import React from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import Header from "./Header";
import FG from "./FG";

import "./App.css";

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
