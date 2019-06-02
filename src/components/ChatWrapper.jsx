import React from 'react'
import styled from 'styled-components'
import { colors } from '../vars';
import ProfileHeader from './ProfileHeader';
import Chat from './Chat';
import MessageInput from './MessageInput';

const Wrapper = styled.div`
height:100vh;
border-left:1px solid ${colors.darkGray};
display:flex;
flex-direction:column;
flex:1;
`


const ChatWrapper = ({ profileImage, title, subtitle, slide, collapse }) => {
    return (
        <Wrapper>
            <ProfileHeader image={profileImage} title={title} subtitle={subtitle} hide={collapse} />
            <Chat slide={slide} />
            <MessageInput hide={collapse} />
        </Wrapper>
    )
}

export default ChatWrapper;