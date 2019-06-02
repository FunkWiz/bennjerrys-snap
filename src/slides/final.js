import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Roll from 'react-reveal/Roll'
import wsLogo from '../images/ws-logo.png'

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
`
const WhatsAppLogo = styled.img`
width:60px;
height:60px;
`

const Final = (
    <Wrapper>
        <Content>
            <Fade>
                <Title>
                    תודה על ההקשבה! <br />
                </Title>
                <Roll right duration={1500}>
                    <WhatsAppLogo src={wsLogo} />
                </Roll>
            </Fade>
        </Content>
    </Wrapper>
)
export default Final;