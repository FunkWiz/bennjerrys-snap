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
const Conc = (
    <Wrapper>
        <Content>
            <Fade right delay={100}>
                <Title>הצעה עסקית:</Title>
                <div>
                    <ul>
                        <li>
                            צירוף קהל היעד של מדינות העולם השלישי תגדיל משמעותית את מספר המשתמשים. זה ישמש כאמצעי להתרחבות עיסקית. אחת הדרכים לעשות זאת תהיה שיווק פלאפונים זולים מאוד שהחברה תייצר ותשווק עם אפליקציית ה"וואטסאפ" מותקנת מראש. יוזמה לרישות איזורים מנותקים תעזור גם כן להתרחבות.
                        </li>
                    </ul>
                </div>
            </Fade>
        </Content>
    </Wrapper>
)
export default Conc;