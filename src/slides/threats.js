import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import courtImg from '../images/court.jpg'
const Wrapper = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
`
const Content = styled.div`
height:80%;
width:80%;

img{
    width:470px;
}
ul {
    list-style: initial;
}
li {
    font-size:30px;
    margin-bottom:10px;
    font-weight:700;
}
`
const Title = styled.h1`
color:#70AD47;
font-size:50px;
font-weight:700;
margin-bottom:20px;
text-decoration:underline;
text-align:center;
`
const Container = styled.div`
display:flex;
justify-content:space-between;
> div:first-child{
    flex-basis:50%;
}
`
const ImageContainer = styled.div`
margin-right:20px;
`
const Threats = (
    <Wrapper>
        <Content>
            <div>
                <Fade right delay={200}>
                    <Title>איומים Threats</Title>
                    <Container>
                        <div>
                            <ul>
                                <li>
                                    פרשיית איסוף המידע של קיימברידג' אנליטיקה יצרה גל שפגע בפייסבוק כלכלית ותדמיתית. נוצר חוסר אמון כבד בפייסבוק והרשת קראה לנטוש את כל מה שקשור לפייסבוק.
                        </li>
                                <li>
                                    לאחר אותה פרשייה, הסנאט האמריקני יושב לפייסבוק על הזנב. הרגולציה תשפיע גם על וואטסאפ.
                        </li>
                                <li>
                                    האיחוד האירופי ומדינות שונות בה קונסות את פייסבוק ו-וואטסאפ על הפרות שונות של שימוש במידע.
                        </li>
                            </ul>
                        </div>
                        <div>
                            <img src={courtImg} />
                        </div>
                    </Container>
                </Fade>
            </div>
        </Content>
    </Wrapper>
)
export default Threats;