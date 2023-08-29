import { giveTextContent, appendTohomeDiv, addClassestoElement} from './funcs'

const homeDiv = document.getElementById('content')
const title = document.createElement('span')
const groupPic = document.createElement('img')
const about = document.createElement('p')

addClassestoElement(['plate','display-flex'], homeDiv)

appendTohomeDiv(
    giveTextContent('Who are Syndicate', title), homeDiv
);

appendTohomeDiv(groupPic, homeDiv)

appendTohomeDiv(
    giveTextContent('Syndicate are a team of 7 unatural boys.', about), homeDiv
)




