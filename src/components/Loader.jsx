import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
          100% { transform: rotate(360deg); }
`;

const dash = keyframes`
 {
        0% {
              stroke-dasharray: 1,150;  /* 1%, 101% circumference */
              stroke-dashoffset: 0;
          }
          50% {
              stroke-dasharray: 90,150; /* 70%, 101% circumference */
              stroke-dashoffset: -35;   /* 25% circumference */
          }
          100% {
              stroke-dasharray: 90,150; /* 70%, 101% circumference */
              stroke-dashoffset: -124;  /* -99% circumference */
          }
      }
`;

const Container = styled.div`
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#f2f2f2;
`;
const LoaderSvg = styled.svg`
          animation: ${rotate} 2s linear infinite;

          circle {
            stroke-dasharray: 1,150; /* 1%, 101% circumference */
          stroke-dashoffset: 0;
          stroke:#aaaaaa;
          stroke-linecap: round;
          animation: ${dash} 1.5s ease-in-out infinite;
          }
`;
export default ({ onNext }) => {
    useEffect(() => {
        setTimeout(() => {
            onNext('whatsapp');
        }, 1500);
    }, []);
    return (
        <Container>
            <LoaderSvg width="65px" height="65px" viewBox="0 0 52 52">
                <circle cx="26px" cy="26px" r="20px" fill="none" strokeWidth="4px" />
            </LoaderSvg>
        </Container>
    )
}