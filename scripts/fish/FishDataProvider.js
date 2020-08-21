const fishCollection = [
    {
        species: "Goldfish",
        length: 15,
        diet: "Fish Food",
        unit: "centimeters",
        name: "Lockes",
        harvest: "Wally World",
        image: "images/goldfish.jpg"
    },
    {
        species: "Rainbow Trout",
        length: 44,
        unit: "centimeters",
        diet: "Fish Food",
        name: "Treant",
        harvest: "Lake Canada",
        image: "images/trout.jpg"
    },
    {
        species: "Bluegill",
        length: 20,
        unit: "centimeters",
        diet: "Fish Food",
        name: "Big Blue",
        harvest: "Friend's Place",
        image: "images/bluegill.jpg"
    },
    {
        name: "Nemo",
        species: "Clownfish",
        length: 1.5,
        unit: "inches",
        diet: "Copepods",
        image: "images/bluegill.jpg",
        harvest: "Orlando, FL"
    },
    {
        name: "Torch",
        species: "Flame Angelfish",
        length: 3,
        image: "images/bluegill.jpg",
        unit: "inches",
        diet: "Mealworms",
        harvest: "San Jose, CA"
    },
    {
        name: "Rocky",
        image: "images/bluegill.jpg",
        species: "Blue Damselfish",
        length: 2,
        unit: "inches",
        diet: "Copepods",
        harvest: "Destin, FL"
    },
    {
        name: "Rudy",
        species: "Copperband Butterflyfish",
        length: 5,
        unit: "inches",
        image: "images/bluegill.jpg",
        diet: "Mealworms",
        harvest: "Costa Rica"
    },
    {
        name: "Simba",
        species: "Lionfish",
        length: 6,
        unit: "inches",
        diet: "Mealworms",
        image: "images/bluegill.jpg",
        harvest: "Argentina"
    },
    {
        name: "Mr. Freeze",
        species: "Blue Tang",
        length: 6,
        unit: "inches",
        diet: "Mealworms",
        image: "images/bluegill.jpg",
        harvest: "Costa Rica"
    },
    {
        name: "Frodo",
        species: "Yellow Tang",
        length: 4,
        image: "images/bluegill.jpg",
        unit: "inches",
        diet: "Mealworms",
        harvest: "Honolulu, HI"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}