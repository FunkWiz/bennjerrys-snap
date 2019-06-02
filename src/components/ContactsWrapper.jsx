import React from 'react'
import styled from 'styled-components'
import ProfileHeader from './ProfileHeader';
import ContactItem from './ContactItem';
import { colors } from '../vars';

const Wrapper = styled.div`
height:100%;
border-left:1px solid ${colors.darkGray};
transition:width 1s ease, opacity 1s ease;
`
const DynamicWrapper = styled(Wrapper)`
width: ${props => props.collapse ? '0' : '35%'};
opacity: ${props => props.collapse ? '0' : '1'};
`
const ContactListWrapper = styled.div`
overflow-y:hidden;
max-height:calc(100% - 59px);
::-webkit-scrollbar { 
    display: none; 
}
`
const ContactList = ({ contacts, onContactClick }) => (
    <ContactListWrapper>
        {contacts.map((contact, idx) => <ContactItem
            {...contact}
            idx={idx}
            onClick={onContactClick}
            key={contact.id} />)}
    </ContactListWrapper>
)
const ContactsWrapper = ({ profileImage, contacts, onContactClick, collapse }) => (
    <DynamicWrapper collapse={collapse}>
        <ProfileHeader image={profileImage} />
        <ContactList contacts={contacts} onContactClick={onContactClick} />
    </DynamicWrapper>
)

export default ContactsWrapper;