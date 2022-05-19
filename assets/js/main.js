// Lev1_1

let languages = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

let sortierung = languages.sort();
console.log(sortierung);

// Lev1_2

let sortierung2 = languages.sort().reverse();
console.log(sortierung2);

// Lev1_13

let meinText1 = ["Hello", "World"];
let meinText2 = ["Anass", "Elaine", "Eric", "Georg"];
let meinText3 = ["Superman", "Wonderwoman", "Hulk", "Batman", "Spiderman"];

let join1 = meinText1.join();
console.log(join1);

let join2 = meinText1.join("");
console.log(join2);

let join3 = meinText1.join(" ");
console.log(join3);

let join4 = meinText1.join("+");
console.log(join4);

let join5 = meinText2.join(" ");
console.log(join5);

let join6 = meinText3.join("+");
console.log(join6);

// Lev2_2

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

let sortNumbers = numArray2.sort((a, b) => a - b);
console.log(sortNumbers);

// FOR EACH

// Lev1_1

let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

// getraenke.sort();
// console.log(getraenke);
getraenke.sort().forEach((elt) => {
    document.write(`${elt}<br>`);
});

// Lev1_2

let getraenke2 = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

let upperDrinks = getraenke2.map((elt) => {
    return elt.toUpperCase();
})

console.log(upperDrinks);

// Lev1_3

let array = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

let result3 = array.map((elt) => { return elt * 2 });
console.log(result3);

let result4 = result3.sort((a, b) => a - b);
console.log(result4);

// Lev1_4

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let celsius = fahrenheit.map((elt) => {
    return (((elt) - 32) / 1.8000);
})

console.log(celsius);

let celsiusEnd = celsius.map((elt) => {
    return Number(elt.toFixed(2));
})

console.log(celsiusEnd);

// Lev1_5

let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];

let durchDrei = checkNumber.forEach((elt) => {
    if ((elt) % 3 == 0) {
        console.log(Number(elt) + 100);
    }
    else {
        console.log(elt);
    }
})

console.log(durchDrei);