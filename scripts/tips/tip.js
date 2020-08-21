const tips = [
    "Speak to them, they get lonely!",
    "Feed them?"
]

const useTips = () => {
    return tips.slice()
}

const Tip = (x) => {
    return `
            <li>
                ${x}
            </li>
    `
}

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".aside")
    const tips = useTips()

    let tipHTMLRepresentations = ""
    for (const fish of tips) {
       tipHTMLRepresentations += Tip(fish)
    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
         ${tipHTMLRepresentations}
    `
}

let tipsHTML = TipList()


