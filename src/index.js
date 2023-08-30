import {
    giveTextContent,
    appendTohomeDiv,
    addClassestoElement,
    addIdtoElement,
    createNewElement,
} from './funcs'
import { members_page } from './members'

const homeDiv = document.getElementById('content')
const whoweareBtn = document.getElementById('tab-whoweare')
const membersBtn = document.getElementById('tab-members')
let active_page = 'home'
const home_page = () => {
    const title = createNewElement('span')
    const groupPic = createNewElement('img')
    const intro_quote = createNewElement('p')
    const about = createNewElement('p')


    addClassestoElement(['plate', 'display-flex'], homeDiv)
    addClassestoElement(['intro'], title)
    addClassestoElement(['group-pic'], groupPic)
    addClassestoElement(['quote_block'], intro_quote)
    addClassestoElement(['about-p'], about)

    appendTohomeDiv(
        giveTextContent('We are Syndicate', title)
        , homeDiv
    );

    appendTohomeDiv(groupPic, homeDiv)

    appendTohomeDiv(
        giveTextContent('Syndicate is a team of 8 boys.', intro_quote)
        , homeDiv
    )
    appendTohomeDiv(
        giveTextContent('this is just a decription about our team', about)
        , homeDiv
    )
}
home_page()
// tabs - click actions
whoweareBtn.addEventListener('click', () => {
    if (active_page === 'members') {
        active_page = 'home'
        homeDiv.innerHTML = ''
        home_page()
    }
    console.log(active_page)
})
membersBtn.addEventListener('click', () => {
    if (active_page === 'home') {
        active_page = 'members'
        homeDiv.innerHTML = ''
        members_page()
    }
    console.log(active_page)

})



