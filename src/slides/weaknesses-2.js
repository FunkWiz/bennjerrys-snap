import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import statusImg from '../images/status.jpg'
const Wrapper = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
`
const Content = styled.div`
height:80%;
width:80%;
display:flex;
justify-content:space-between;
img{
    width:420px;
}
ul {
    list-style: initial;
}
li {
    font-size:30px;
    margin-bottom:10px;
    font-weight:700;
}
`
const Title = styled.h1`
color:#70AD47;
font-size:40px;
font-weight:700;
margin-bottom:20px;
text-decoration:underline;
text-align:center;
`
const Container = styled.div`
flex-basis:40%;
`
const ImageContainer = styled.div`
margin-right:20px;
`
const Weaknesses = (
    <Wrapper>
        <Content>
            <Container>
                <Fade right delay={200}>
                    <Title>חולשות Weaknesses</Title>
                    <div>
                        <ul>
                            <li>
                                חילוקי דעות קשים עם חברת האם, פייסבוק – מה שהוביל להתפטרות של קום (ממייסדי וואטסאפ).
                        <br /><br />
                                קודם לכן, שותפו להקמת החברה, בריאן אקטון, שעזב את החברה בספטמבר 2017, צייץ את ההאשטאג #deletefacebook לאחר חשיפת פרשיית קיימברידג' אנליטיקה.
                        </li>
                        </ul>
                    </div>
                </Fade>
            </Container>
            <ImageContainer>
                <Fade left>
                    <img src={statusImg} />
                </Fade>
            </ImageContainer>
        </Content>
    </Wrapper>
)
export default Weaknesses;