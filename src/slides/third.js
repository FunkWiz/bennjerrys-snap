import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import swotImage from '../images/swot.png'

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
img {
    width:350px;
}
`
const Third = (
    <Wrapper>
        <Content>
            <Fade>
                <img src={swotImage} />
            </Fade>
        </Content>
    </Wrapper>
)
export default Third;