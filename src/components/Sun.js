import React from "react";
import moment from "moment";
import styled from "styled-components";
import sunriseIcon from "../assets/sunrise.png";
import sunsetIcon from "../assets/sunset.png";

const SunIcons = styled.img`
  width: 30px;
  height: auto;
`;
const SunValues = styled.div`
  margin: 0 8px;
`;
const Wrapp = styled.div`
  display: flex;
  align-items: center;
`;

export default function Sun(date) {
  let sunrise = date.date.sys.sunrise;
  var sunset = date.date.sys.sunset;

  let sunRise = moment.unix(sunrise).format("hh:mm a");
  let sunSet = moment.unix(sunset).format("hh:mm a");

  return (
    <Wrapp>
      <SunIcons src={sunriseIcon} /> <SunValues> {sunRise} </SunValues>
      <SunIcons src={sunsetIcon} />
      <SunValues> {sunSet} </SunValues>
    </Wrapp>
  );
}
