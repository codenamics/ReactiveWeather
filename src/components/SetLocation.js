import React from "react";
import { AppContext } from "../AppProvider";
import styled, { css, keyframes } from "styled-components";

const animation = keyframes`
0% {
  opacity: 0;
  transform: translateY(35px);
}

100% {
  opacity: 1;
  transform: translate(0);
}
`;
const animationRule = css`
  ${animation} 1s infinite alternate;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation-name: ${animationRule};
  animation-duration: 1s;
`;
const LocationInput = styled.input`
  width: 50%;
  border: 1px solid #c5c5c5;
  padding: 15px 20px;
  font-size: 50px;
`;
const SetLocationBTN = styled.button`
  margin-top: 20px;
  width: 200px;
  height: 50px;
  border-radius: 3px;
  background-color: #2789ec;
  color: #fff;
  text-transform: uppercase;
  border: none;
`;

function takeLocation(e, getLocation) {
  let input = e.target.value;
  if (!input) {
    getLocation(null);
    return;
  } else {
    getLocation(input);
  }
}

export default function SetLocation() {
  return (
    <AppContext.Consumer>
      {({ getLocation, setLocation }) => (
        <Container>
          <LocationInput onChange={e => takeLocation(e, getLocation)} />
          <SetLocationBTN onClick={setLocation}> Set Location </SetLocationBTN>
        </Container>
      )}
    </AppContext.Consumer>
  );
}
