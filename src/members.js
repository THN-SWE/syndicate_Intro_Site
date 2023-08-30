import {
    giveTextContent,
    appendTohomeDiv,
    addClassestoElement,
    addIdtoElement,
    createNewElement,
} from './funcs'
const homeDiv = document.getElementById('content')
const members_list = [
    'Mathushan',
    'Piratha',
    'Lingesan',
    'Abeeshman',
    'Karikalan',
    'Thulasikan',
    "Vithushan",
    "Kishanth"
]

addClassestoElement(['plate', 'display-flex'], homeDiv)
const members_page = () => {
    const heading = createNewElement('span')
    addClassestoElement(['intro'], heading)

    appendTohomeDiv(giveTextContent('Soldiers', heading)
        , homeDiv)

    for (const mem of members_list) {
        const member = createNewElement('p')
        addClassestoElement(['quote_block'], member)

        appendTohomeDiv(giveTextContent(mem, member)
            , homeDiv)
    }

}



export { members_page }