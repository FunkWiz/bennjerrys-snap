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
}
`
const Title = styled.h1`
color:#70AD47;
font-size:50px;
font-weight:700;
margin-bottom:60px;
text-decoration:underline;
`
const Image = styled.img`
max-width:400px;
`
const Second = (
    <Wrapper>
        <Content>
            <Fade right delay={200}>
                <Title>רקע כללי על החברה</Title>
                <div>
                    <ul>
                        <li>
                        וואטסאפ הוקמה ב-24 בפברואר 2009 על ידי יאן קום ושותפו בריאן אקטון.
                        </li>
                        <li>
                            כיום וואטסאפ נמצאת בבעלות פייסבוק שרכשה אותה ב-2014 תמורת 19 מיליארד דולר.
                        </li>
                    </ul>
                </div>
                <div>
                    <Image src={image} />
                </div>
            </Fade>
        </Content>
    </Wrapper>
)
export default Second;