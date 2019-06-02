import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import articleImage from '../images/article.jpg'

const Wrapper = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
`
const Content = styled.div`
height:80%;
width:80%;
text-align:center;
img {
   max-width:80%;
}
`
const Article = (
    <Wrapper>
        <Content>
            <Fade>
                <img src={articleImage} />
            </Fade>
        </Content>
    </Wrapper>
)
export default Article;