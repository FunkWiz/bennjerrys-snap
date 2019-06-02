import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import image from '../images/ws-image.jpg'
const Wrapper = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
`
const Content = styled.div`
height:80%;
width:80%;
ul {
    list-style: initial;
}
li {
    font-size:40px;
    margin-bottom:20px;
    font-weight:700;
}
`
const Title = styled.h1`
color:#70AD47;
font-size:50px;
font-weight:700;
margin-bottom:60px;
text-decoration:underline;
text-align:center;
`
const Conc = (
    <Wrapper>
        <Content>
            <Fade right delay={100}>
                <Title>תוכן עניינים</Title>
                <div>
                    <ul>
                        <li>
                            רקע כללי
                        </li>
                        <li>
                            SWOT
                        </li>
                        <li>
                            מסקנות והצעת עיסקית
                        </li>
                        <li>
                            פילוח שוק
                        </li>
                        <li>
                            בידול
                        </li>
                    </ul>
                </div>
            </Fade>
        </Content>
    </Wrapper>
)
export default Conc;