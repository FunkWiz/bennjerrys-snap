import React from 'react'
import styled from 'styled-components'
import { colors } from '../vars'
import studentImg from '../images/student.png'

const Wrapper = styled.div`
padding:10px 16px;
background-color:${colors.gray};
display:flex;
align-items:center;
`
const Image = styled.img`
width:40px;
height:40px;
border-radius:50%;
`
const ImageWrapper = styled.div`
margin-left:15px;
`
const Title = styled.span`
font-size:16px;
`

const ProfileHeader = ({ image, title, hide }) => {
    if (hide) return <div></div>;
    return (
        <Wrapper hide>
            <ImageWrapper>
                <Image src={image || studentImg} />
            </ImageWrapper>
            <div>
                <Title>{title}</Title>
            </div>
        </Wrapper>
    )
}

export default ProfileHeader;