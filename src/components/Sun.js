import React from "react";
import moment from "moment";
export default function Sun(date) {
  let sunrise = date.date.sys.sunrise; // 1542739205
  var sunset = date.date.sys.sunset; // 1542789748

  let sunRise = moment.unix(sunrise).format("hh:mm a");
  let sunSet = moment.unix(sunset).format("hh:mm a");

  console.log(sunSet); // 09:33 pm
  return (
    <div>
      {sunRise} {sunSet}
    </div>
  );
}
