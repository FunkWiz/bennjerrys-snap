import React from "react";
import styled, { keyframes } from "styled-components";
import Fade from "react-reveal/Fade";

const flicker = keyframes`
from {
    opacity: 0;
}

to {
    opacity:1;
}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  direction: ltr;
`;
const Content = styled.div`
  height: 80%;
  width: 80%;
  text-align: center;
  font-family: monospace;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  margin-top: 40px;
  margin-bottom: 160px;
  color: #da2f2f;
  animation-name: ${flicker};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;
`;
const Description = styled.p`
  font-size: 45px;
  font-weight: 700;
  color: #317cdc;
`;

const Intro = (
  <Wrapper>
    <Content>
      <Fade delay={10000}>
        <div>
          <Title>Help us save the planet</Title>
          <Description>#GlobalWarmingIsNotCOOL</Description>
        </div>
      </Fade>
    </Content>
  </Wrapper>
);
export default Intro;
