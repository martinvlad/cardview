import * as React from "react";
import { StatefulCalendar } from "baseui/datepicker";
export default function Calender() {
  return (
    <StatefulCalendar
      style={{ paddingLeft: "100px", paddingTop: "100px" }}
      // use the 'onChange' prop to pull data from the component into your application state
      onChange={({ date }) => console.log(date)}
    />
  );
}
