import React from 'react'
import styled from 'styled-components'
import chatBg from '../images/chat-bg.png';

const Wrapper = styled.div`
flex:1;
background-color:#e5ddd5;
position:relative;

&::after {
    content:'';
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    opacity:0.06;
    background-image:url(${chatBg});
    background-repeat: repeat repeat;
}
`

const Chat = ({ slide }) => (
    <Wrapper>
        {slide.slide}
    </Wrapper>
)

export default Chat;