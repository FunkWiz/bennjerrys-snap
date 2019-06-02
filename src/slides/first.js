import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

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
}
`
const Title = styled.h1`
color:#70AD47;
font-size:50px;
font-weight:700;
margin-bottom:60px;
text-decoration:underline;
`

const First = (
    <Wrapper>
        <Content>
            <Fade right delay={200}>
                <Title>רקע כללי על החברה</Title>
                <div>
                    <ul>
                        <li>
                            וואטסאפ היא אפליקציה חינמית להעברת מסרים, תמונות, קטעי וידאו וקטעי אודיו.
                        </li>
                        <li>
                            זמינה לשימוש ממגוון רחב של מדיות (אפליקציה, אתר, תוכנה למחשב).
                        </li>
                        <li>
                            נכון לפברואר 2018 לוואטסאפ יש 1.5 מיליארד משתמשים ברחבי העולם.
                        </li>
                    </ul>
                </div>
            </Fade>
        </Content>
    </Wrapper>
)
export default First;