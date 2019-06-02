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
    margin-bottom:10px;
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
const Image = styled.img`
max-width:400px;
`
const Strengths = (
    <Wrapper>
        <Content>
            <Fade right delay={200}>
                <Title>חוזקות Strengths</Title>
                <div>
                    <ul>
                        <li>
                            נהנית מהיתרון של היותה הראשונה בתחומה.
                        </li>
                        <li>
                            בסיס משתמשים ענק – 1.5 מיליארד.
                        </li>
                        <li>
                            חינמית.
                        </li>
                        <li>
                            מיועדת לשכבות גילאים רבות.
                        </li>
                        <li>
                            נותנת מענה לקבוצות (כמו הקבוצה הכיתתית, גן וכו').
                        </li>
                        <li>
                            ידידותית למשתמש.
                        </li>
                        <li>
                            בוואטסאפ מוטמעת טכנולוגיית הצפנה.
                        </li>
                    </ul>
                </div>
            </Fade>
        </Content>
    </Wrapper>
)
export default Strengths;