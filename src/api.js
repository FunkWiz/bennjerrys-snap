import kittenImage from './images/kitten.jpg'
import kamudi from './images/kamudi.jpeg'
import lili from './images/lili.jpg'
import tal from './images/talalmog.jpg'
import people from './images/people.png'
import or from './images/or.jpg'
import food from './images/food.jpg'
import sapir from './images/sapir.jpg'
import vlad from './images/vlad.jpg'
import introSlide from './slides/intro'
import firstSlide from './slides/first'
import secondSlide from './slides/second'
import thirdSlide from './slides/third'
import finalSlide from './slides/final'
import graphSlide from './slides/graph'
import strengthsSlide from './slides/strengths'
import strengthsSlide2 from './slides/strengths-2'
import weaknessesSlide from './slides/weaknesses'
import weaknessesSlide2 from './slides/weaknesses-2'
import threatsSlide from './slides/threats'
import threatsSlide2 from './slides/threats-2'
import contentSlide from './slides/content'
import articleSlide from './slides/article'
import concSlide from './slides/conc'
import oppSlide from './slides/opp'
import propSlide from './slides/prop'
import marketSlide from './slides/market'
import specialSlide from './slides/special'
const createMessage = (message, time) => {
    return { message, time };
}

const createContact = (id, image, title, slide, messages = []) => {
    return { id, image, title, messages, slide };
}
export const contacts = [
    createContact('1', kamudi, 'סבא', null, [
        createMessage('מתי אתה מגיע לבקר?', '09:32')
    ]),
    createContact('2', lili, 'סבתא', null, [
        createMessage('ככה עושים מרק', '10:07'),
    ]),
    createContact('3', sapir, 'אמא', null, [
        createMessage('טוב', '09:20'),
    ]),
    createContact('4', tal, 'אבא', null, [
        createMessage('תביא לי כוס מים', '11:00'),
    ]),
    createContact('5', people, 'הכיתה המעופפת', null, [
        createMessage('imgFile.jpg', '11:09'),
    ]),
    createContact('6', food, 'אפי הנמר', null, [
        createMessage('לא עובד עובדים בשבילי', '10:50')
    ]),
    createContact('7', or, 'מוטי', null, [
        createMessage('מה הלוז?', '10:22'),
    ]),
    createContact('8', vlad, 'ולדיסלאב', null, [
        createMessage(`Baby don't hurt me`, '00:30'),
    ]),
    createContact('9', kittenImage, 'אדוני', null, [
        createMessage('אמא אני רוצה טונה', '00:50')
    ]),
]

let slideCount = 1;
const createSlide = (id, slide) => {
    return { id, slide, idx: slideCount++ }
}
export const slideList = [
    createSlide('0', introSlide),
    createSlide('1', contentSlide),
    createSlide('200', firstSlide),
    createSlide('2', secondSlide),
    createSlide('3', thirdSlide),
    createSlide('5', strengthsSlide),
    createSlide('6', strengthsSlide2),
    createSlide('7', graphSlide),
    createSlide('8', weaknessesSlide),
    createSlide('9', weaknessesSlide2),
    createSlide('10', threatsSlide),
    createSlide('11', threatsSlide2),
    createSlide('12', oppSlide),
    createSlide('13', articleSlide),
    createSlide('14', concSlide),
    createSlide('15', propSlide),
    createSlide('16', marketSlide),
    createSlide('17', specialSlide),
    createSlide('4', finalSlide),
]