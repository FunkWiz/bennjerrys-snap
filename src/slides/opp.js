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
    font-size:36px;
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
const Opportunities = (
    <Wrapper>
        <Content>
            <Fade right delay={200}>
                <Title>הזדמנויות Opportunities</Title>
                <div>
                    <ul>
                        <li>
                            התגברות החדירה של האינטרנט למדינות מתפתחות תאפשר לוואטצאפ להגדיל אף יותר את כמות המשתמשים.
                        </li>
                        <li>
                            חדירת הסמארטפונים לכל מקום בעולם.
                        </li>
                        <li>
                            מתן מענה למגזר העסקי. כחלק מהניסיון להיות רווחיים, החברה תתחיל למכור מודעות ומתכננת לגבות תשלום מחברות גדולות שרוצות לתקשר עם הלקוחות שלהן באמצעות האפליקציה.                        </li>
                        <li>
                            בורחים מהפיד - צעירים מעדיפים לצרוך תוכני חדשות בווטסאפ.
                        </li>
                        <li>
                            "פייסבוק" כחברת אם – נותנת תמיכה ומאפשרת צמיחה עתידית על ידי אינטגרציות שונות עם פייסבוק.
                        </li>
                    </ul>
                </div>
            </Fade>
        </Content>
    </Wrapper>
)
export default Opportunities;