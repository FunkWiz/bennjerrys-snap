import React, { Component } from 'react'
import styled from 'styled-components'
import ChatWrapper from '../components/ChatWrapper';
import ContactsWrapper from '../components/ContactsWrapper';
import profileImage from '../images/student.png'
import { contacts as contactList, slideList } from '../api';

const Wrapper = styled.div`
height:100%;
display:flex;
`

class WhatsappContainer extends Component {
    constructor() {
        super();
        this.state = {
            contacts: contactList,
            selectedContact: {},
            collapse: false,
            didNewMessage: false,
            slides: slideList,
            currentSlide: slideList[0]
        }
    }
    updateContacts = (contacts, extend) => {
        const selectedContact = contacts.find(contact => contact.selected) || {};
        this.setState({ contacts, selectedContact, collapse: true, ...extend });
    }
    doNewMessage = () => {
        const { contacts } = this.state;
        const contactId = '7';
        const query = contact => contact.id == contactId;
        const contactIdx = contacts.findIndex(query);
        const contact = contacts.find(query);
        contacts.splice(contactIdx, 1);
        const message = contact.messages[contact.messages.length - 1];
        message.isNew = true;
        message.message = "היי! בואו נתחיל";
        message.time = "11:34";
        contacts.unshift(contact);
        this.updateContacts(contacts, { collapse: false, didNewMessage: true });
    }
    // componentWillMount() {
    //     // window.addEventListener('keydown', event => {
    //     //     switch (event.keyCode) {
    //     //         case 38:
    //     //             this.handleKeyUp();
    //     //             break;
    //     //         case 40:
    //     //             this.handleKeyDown();
    //     //             break;
    //     //     }
    //     // })
    // }
    // componentWillUnmount() {
    //     // window.removeEventListener('keydown');
    // }
    getSelectedContactIdx() {
        const { contacts } = this.state;
        let selectedIdx;
        contacts.forEach((contact, idx) => {
            if (contact.selected) {
                selectedIdx = idx;
            }
        })
        return selectedIdx;
    }
    doEnding = () => {
        if (this.state.didEnding) return;
        this.setState({ didEnding: true });
        const { contacts } = this.state;
        const tal = contacts.find(contact => contact.id === '1');
        const lilly = contacts.find(contact => contact.id === '2');
        const sapir = contacts.find(contact => contact.id === '3');
        const talalmog = contacts.find(contact => contact.id === '4');
        const or = contacts.find(contact => contact.id === '5');
        const sharona = contacts.find(contact => contact.id === '6');
        const vlad = contacts.find(contact => contact.id === '8');
        const main = contacts.find(contact => contact.id === '7');
        setTimeout(() => {
            setTimeout(() => this.newMessage(tal, 'יששש סיימנו!!', '13:00'), 1000)
            setTimeout(() => this.newMessage(lilly, 'סוףסוף, הולכת לישון!', '13:02'), 1800)
            setTimeout(() => this.newMessage(sapir, 'סטייללל', '13:05'), 2600)
            setTimeout(() => this.newMessage(talalmog, 'בדוקקקקקקקק', '13:06'), 3500)
            setTimeout(() => this.newMessage(or, 'בדוקקקקקקקקקקקקק', '13:09'), 4200)
            setTimeout(() => this.newMessage(sharona, 'לא הבנתי מה קרה?', '13:12'), 5000)
            setTimeout(() => this.newMessage(vlad, "BABY DON'T HURT ME", '13:15'), 5500)
            setTimeout(() => this.newMessage(main, "מקווים שנהניתם מהמצגת!", '13:15'), 7000)
        }, 1500)
    }
    newMessage = (contact, message, time) => {
        const { contacts } = this.state;
        const contactIdx = contacts.findIndex(c => c.id === contact.id);
        contacts.splice(contactIdx, 1);
        contact.messages.push({ message, time, isNew: true })
        contacts.unshift(contact);
        this.setState({ contacts });
    }
    handleKeyDown = () => {
        const { slides, currentSlide } = this.state;
        if (currentSlide) {
            if (!this.state.didNewMessage) {
                this.doNewMessage();
                return;
            }
            const nextSlide = slides[slides.findIndex(slide => slide.id === currentSlide.id) + 1];
            if (nextSlide) {
                this.setState({ currentSlide: nextSlide, collapse: nextSlide.id !== '4' })
                if (nextSlide.id === '4') {
                    this.doEnding();
                    return;
                }
            }
        }
        const { contacts } = this.state;
        contacts.forEach(contact => contact.messages[contact.messages.length - 1].isNew = false)
        this.setState({ contacts })
    }
    handleKeyUp = () => {
        const { slides, currentSlide } = this.state;
        if (currentSlide) {
            const nextSlide = slides[slides.findIndex(slide => slide.id === currentSlide.id) - 1];
            if (nextSlide) {
                this.setState({ currentSlide: nextSlide, collapse: nextSlide.idx !== 1 })
            }
        } else {
            this.setState({ currentSlide: slides[1], collapse: true })
        }
        const { contacts } = this.state;
        contacts.forEach(contact => contact.messages[contact.messages.length - 1].isNew = false)
        this.setState({ contacts })
    }

    // handleKeyDown = () => {
    //     const contacts = this.state.contacts.slice();
    //     if (!contacts.some(contact => contact.selected)) {
    //         if (this.state.didNewMessage)
    //             this.onContactClick('1', true);
    //         else
    //             this.doNewMessage();
    //         return;
    //     }
    //     const selectedIdx = this.getSelectedContactIdx();
    //     const selected = contacts[selectedIdx + 1];
    //     if (!selected) return;
    //     contacts.forEach(contact => {
    //         contact.selected = contact.id === selected.id;
    //         contact.messages[contact.messages.length - 1].isNew = false;
    //     });
    //     this.updateContacts(contacts);
    // }
    // handleKeyUp = () => {
    //     const selectedIdx = this.getSelectedContactIdx();
    //     const contacts = this.state.contacts.slice()
    //     const selected = contacts[selectedIdx - 1];
    //     if (!selected || selected.id === '7') {
    //         contacts.forEach(contact => contact.selected = false)
    //         this.updateContacts(contacts, { collapse: false });
    //         return;
    //     }
    //     contacts.forEach(contact => {
    //         contact.selected = contact.id === selected.id;
    //         contact.messages[contact.messages.length - 1].isNew = false;
    //     });
    //     this.updateContacts(contacts);
    // }
    onContactClick = (id, force) => {
        const contacts = this.state.contacts.slice();
        let selectedContact;
        if (!force && id !== '7') return;
        contacts.forEach(contact => {
            if (contact.id === id) {
                contact.selected = true;
                selectedContact = contact;
                contact.messages[contact.messages.length - 1].isNew = false;
            }
        })
        if (selectedContact && selectedContact.id === '7' && this.state.didNewMessage) {
            this.updateContacts(contacts, { currentSlide: this.state.slides[1] });
        } else if (selectedContact && force) {
            this.updateContacts(contacts);
        }
    }

    render() {
        return (
            <Wrapper>
                <ContactsWrapper
                    profileImage={profileImage}
                    contacts={this.state.contacts}
                    onContactClick={this.onContactClick}
                    collapse={this.state.collapse}
                />
                <ChatWrapper
                    profileImage={this.state.selectedContact.image}
                    collapse={this.state.collapse}
                    title={this.state.selectedContact.title}
                    subtitle={this.state.selectedContact.subtitle}
                    slide={this.state.currentSlide || {}}
                />
            </Wrapper>
        )
    }
}
export default WhatsappContainer;