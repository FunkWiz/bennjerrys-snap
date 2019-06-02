import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import womanImg from '../images/woman.jpg'

const Wrapper = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
`
const Content = styled.div`
height:80%;
width:80%;
position:relative;
img{
    width:200px;
    top:0;
    left:0;
    position:absolute;
}
ul {
    list-style: initial;
}
li {
    font-size:36px;
    margin-bottom:10px;
    font-weight:700;
}
`
const Title = styled.h1`
color:#70AD47;
font-size:50px;
font-weight:700;
margin-bottom:70px;
text-decoration:underline;
text-align:center;
`
const Conc = (
    <Wrapper>
        <Content>
            <Fade right delay={100}>
                <Title>פילוח שוק: <img src={womanImg} /></Title>
                <div>
                    <ul>
                        <li>
                            וואטסאפ פונה לקהל רחב, למעשה לכולם, הוא עונה על צורך קיומי- לתקשר עם אנשים ומוסדות בכל רגע נתון בצורה הכי יעילה
                     <br /><br />
                            וואטסאפ נותן מענה לבתי עסק שמעבירים מידע ומשימות באופן מיידי לעובדים שלהם.
                     <br /><br />
                            ומהצד השני גם נותן מענה למשפחה שלא משנה המרחק נשארת קרובה בעזרת שיתוף ותקשורת מיידית.
                        </li>
                    </ul>
                </div>
            </Fade>
        </Content>
    </Wrapper>
)
export default Conc;