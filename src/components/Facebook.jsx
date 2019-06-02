import React from "react";
import styled from 'styled-components';
import fbImg from "../images/jerry.jpg";


const Container = styled.div`
height:100vh;
background-image: url(${fbImg});
     background-repeat:no-repeat;
     background-size:cover;
`

const Facebook = ({ onNext }) => {
    return (
        <Container onClick={() => onNext('loader')}></Container>
    )
}

export default Facebook