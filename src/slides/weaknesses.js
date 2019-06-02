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
    font-size:30px;
    margin-bottom:10px;
    font-weight:700;
}
`
const Title = styled.h1`
color:#70AD47;
font-size:50px;
font-weight:700;
margin-bottom:40px;
text-decoration:underline;
text-align:center;
`

const Weaknesses = (
    <Wrapper>
        <Content>
            <Fade right delay={200}>
                <Title>חולשות Weaknesses</Title>
                <div>
                    <ul>
                        <li>
                            וואטסאפ לא רווחית.
                        </li>
                        <li>
                            וואטסאפ לא עובדת ללא אינטרנט (לעומת SMS,MMS).
                        </li>
                        <li>
                            פרטיות – למרות הצהרתה של וואטסאפ שהמידע העובר מצד לצד מוצפן, מספר גדול של מומחי אבטחת מידע טוענים שזוהי הצהרה ללא כיסוי.
                        </li>
                        <li>
                            אין צנזורה.
                        </li>
                        <li>
                            הבריונות ברשת קלה ליישום – האפליקציה מאפשרת התקוממות לחרם ולהשפלות של ילדים.
                        </li>
                        <li>
                            אין אכיפה של זכויות יוצרים כשמישהו מפיץ תמונות/סרטונים לא שלו ברמה שהיא לא מסחרית.
                        </li>
                        <li>
                            אימוץ איטי של פיצ'רים חדשים שכבר קיימים באפליקציות אחרות.
                        </li>
                    </ul>
                </div>
            </Fade>
        </Content>
    </Wrapper>
)
export default Weaknesses;