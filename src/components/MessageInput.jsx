import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
padding:5px 10px;
background-color:#f5f1ee;
height:62px;
display:flex;
align-items:center;
`
const Input = styled.input`
width:100%;
height:40%;
border:0;
outline:none;
border-radius:21px;
padding:10px 12px;
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:#A4A4A4;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:#A4A4A4;
    opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:#A4A4A4;
    opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color:#A4A4A4;
}
::-ms-input-placeholder { /* Microsoft Edge */
    color:#A4A4A4;
}

::placeholder { /* Most modern browsers support this now. */
    color:#A4A4A4;
}
`

const MessageInput = ({ hide }) => {
    if (hide) return <div></div>;
    return (
        <Wrapper>
            <Input placeholder="הקלד הודעה" />
        </Wrapper>
    )
}

export default MessageInput;