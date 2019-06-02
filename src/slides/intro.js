import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Wrapper = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
`
const Content = styled.div`
height:80%;
width:80%;
text-align:center;
`
const Title = styled.h1`
font-size:50px;
font-weight:700;
margin-bottom:60px;
`
const Description = styled.p`
font-size:50px;
font-weight:700;
`

const Intro = (
    <Wrapper>
        <Content>
            <Fade>
                {/* <Title>יסודות השיווק</Title>
                <Description>
                    עבודה מסכמת <br />
                    WhatsApp
                </Description> */}
            </Fade>
        </Content>
    </Wrapper>
)
export default Intro;