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
const Threats = (
    <Wrapper>
        <Content>
            <Fade right delay={200}>
                <Title>איומים Threats</Title>
                <div>
                    <ul>
                        <li>
                            עידן של יזמות בלתי פוסקת: אולי מחר יקום הרעיון שיחסל את WhatsApp.
                        </li>
                        <li>
                            חסמי כניסה נמוכים לשחקנים חדשים.
                        </li>
                        <li>
                            רגולציות עקב השימושים הרעים באפליקציה.
                        </li>
                        <li>
                            נטישת משתמשים עקב הכוונה להכניס פרסומות באפליקציה.
                        </li>
                        <li>
                            קיימות אפליקציות חינמיות מתחרות (טלגרם, WeChat, וייבר, פייסבוק מסנג'ר) שיש בהן פיצ'רים רבים שאין עדיין בוואטסאפ.
                        </li>
                        <li>
                            Fake news - הידיעות המומצאות שרצות בווסטאפ. יכולות להגיע מכול מקום ולהשפיע על כל אחד. כיום אין התמודדות.
                        </li>
                    </ul>
                </div>
            </Fade>
        </Content>
    </Wrapper>
)
export default Threats;