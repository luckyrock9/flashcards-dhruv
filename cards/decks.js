let states = [
["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"], 
["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "St. Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck", "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"]
];

let queryString = window.location.search;
console.log(queryString)
let urlParams = new URLSearchParams(queryString);
// PROBLEM IS HERE ^^^^^^
console.log(urlParams)
let deckname = "Customdeck"
console.log(deckname)
let flashcardarray = JSON.parse(localStorage.getItem(deckname));
console.log(flashcardarray)
let whicharray = states
if(flashcardarray !== null){
    whicharray = flashcardarray
}
console.log(whicharray)
let set = document.getElementById("set");
let columns = []
for (let i = 0; i < 3; i++){
    let col = document.createElement("div");
    col.classList.add("colum")
    set.appendChild(col)
    columns.push(col)
}
console.log(states)
for (let i = 0; i < flashcardarray[0].length; i++){
    let pair = document.createElement("div");
    pair.classList.add("pair");
    let card_a = document.createElement("p");
    card_a.textContent = flashcardarray[0][i]; 
    let card_b = document.createElement("p");
    card_b.textContent = flashcardarray[1][i];
    card_a.classList.add("carda");
    card_b.classList.add("cardb");
    pair.appendChild(card_a);
    pair.appendChild(card_b); 
    columns[i % columns.length].appendChild(pair);
}