import React from 'react'
import styled from 'styled-components'
import Bounce from 'react-reveal/Bounce'
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
const Conc = (
    <Wrapper>
        <Content>
            <Bounce right delay={100}>
                <Title>מסקנות:</Title>
                <div>
                    <ul>
                        <li>
                            וואטסאפ שמה דגש על תקשורת בין אנשים באופן נוח וחסכוני.
                        </li>
                        <li>
                            האפליקציה נוחה לשימוש ( גם סבתא שלי שולחת כל שישי "שבת שלום" )
                        </li>
                        <li>
                            וואטסאפ חינמית ולכן היא זמינה לכול משתמש.
                     </li>
                        <li>
                            בורחים מהפיד - צעירים מעדיפים לצרוך תוכני חדשות בווטסאפ.
                        </li>
                        <li>
                            היא מאפשרת בחירת סוג תקשורת ( טקסט, וידאו , קול )
                        </li>
                    </ul>
                </div>
            </Bounce>
        </Content>
    </Wrapper>
)
export default Conc;