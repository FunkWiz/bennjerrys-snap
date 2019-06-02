import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../vars';
import Sound from 'react-sound';
import thanos from '../thanos';

const Wrapper = styled.div`
padding-bottom:1px;
height:72px;
display:flex;
cursor:pointer;
white-space:nowrap;
transition:background-color .2s;
position:relative;
&:hover{
    background-color:#f4f5f5;
}
`
const DynamicWrapper = styled(Wrapper)`
${props => props.selected ? `
&, &:hover{
    background-color:#e9ebeb; 
}
` : ''}
`
const FlexContainer = styled.div`
display:flex;
justify-contect:space-between;
`
const TitleContainer = styled(FlexContainer)`
margin-bottom:10px;
`
const ImageWrapper = styled.div`
padding:0 15px 0 13px;
align-self:center;
`
const Image = styled.img`
width:49px;
height:49px;
border-radius:50%;
`
const Title = styled.span`
font-size:16px;
flex-grow:1;
font-weight:700;
`

const Subtitle = styled.span`
font-size:14px;
color:rgba(0, 0, 0, .6);
flex:1;
`

const Time = styled.span`
font-size:12px;
color:rgba(0, 0, 0, .4);
`

const Content = styled.div`
display:flex;
flex:1;
justify-content:space-between;
> :last-child{
    flex:1;
}
`
const RightContainer = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
border-bottom: 1px solid #f2f2f2;
padding-left:15px;
`
const NewMessageCount = styled.div`
border-radius:50%;
color:${colors.white};
background-color:#09d261;
width:20px;
height:20px;
text-align:center;
line-height:20px;
font-size:12px;
opacity:${props => props.show ? 1 : 0};
transition:opacity 1s;
`
const ContactItem = ({ id, image, title, messages, selected, onClick, idx }) => {
    const ref = useRef(null);
    const lastMessage = messages[messages.length - 1];
    const _onClick = () => { onClick(id) };

    useEffect(() => {
        if (!ref) return;
        if (idx % 2 === 0) {
            setTimeout(() => {
                thanos(ref.current);
            }, 1000 * 3 *  idx)
        }
    }, [ref])
    return (
        <DynamicWrapper selected={selected} onClick={_onClick} innerRef={ref}>
            <Content>
                <ImageWrapper>
                    <Image src={image} />
                </ImageWrapper>
                <RightContainer>
                    <TitleContainer>
                        <Title>{title}</Title>
                        <Time>{lastMessage.time}</Time>
                    </TitleContainer>
                    <FlexContainer>
                        <Subtitle>{lastMessage.message}</Subtitle>
                        <NewMessageCount show={lastMessage.isNew}>1</NewMessageCount>
                    </FlexContainer>
                </RightContainer>
            </Content>
        </DynamicWrapper>
    )
}
export default ContactItem;