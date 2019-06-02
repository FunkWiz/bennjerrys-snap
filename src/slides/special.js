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
                <Title>מה מייחד את וואטסאפ?</Title>
                <div>
                    <ul>
                        <li>
                            וואטסאפ הייתה הראשונה לצאת לשוק עם אפליקצית SMS משודרגת שהייתה מבוססת אינטרנט.
                        </li>
                        <li>
                            היא אפליקציה חינמית לחלוטין ואינה מציגה פרסומות.
                        </li>
                        <li>
                            ידידותית למשתמש וקלה לתפעול.
                        </li>
                        <li>
                            יש את האפשרות להתאים את האפליקציה לצרכים שלי. ( איזה קבוצה להשתיק, איזה רקע לשים ואיזה כתב לבחור )
                        </li>
                    </ul>
                </div>
            </Fade>
        </Content>
    </Wrapper>
)
export default Conc;