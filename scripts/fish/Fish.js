/**
 *  Fish which renders individual fish objects as HTML
 */
export const Fish = (fish) => {
    return `
        <section class="card">
            <div><img src="${fish.image}" alt="${fish.name}" width="150" height="150" style="margin: 10%;"></div>
            <ul><li class="fish_name">Name: ${fish.name}</li>
            <li class="fish_species">Species: ${fish.species}</li>
            <li class="fish_length">Length: ${fish.length} ${fish.unit}</li>
            <li class="fish_location">Harvested: ${fish.harvest}</li>
            <li class="fish_diet">Diet: ${fish.diet}</li></ul>
        </section>
    `
}