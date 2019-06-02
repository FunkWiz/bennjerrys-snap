import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import graphImage from '../images/graph.jpg'

const Wrapper = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
`
const Content = styled.div`
width:80%;
text-align:center;

img{
    max-width:430px;
}
`
const Graph = (
    <Wrapper>
        <Content>
            <Fade>
                <img src={graphImage} />
            </Fade>
        </Content>
    </Wrapper>
)
export default Graph;