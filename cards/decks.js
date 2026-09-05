let states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR"]
let capitals = ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "St. Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck", "Columbus", "Oklahoma City", "Salem"];
let kard = document.getElementById("kard")
kard.innerText = "AL";
let ckard = document.getElementById("ckard")
ckard.innerText = "Montgomery";
alert("works");
let set = document.getElementById("set");
let pair = document.createElement("div");
pair.classList.add("pair");
let card_a = document.createElement("p");
card_a.textContent = states[0]; 
let card_b = document.createElement("p");
card_b.textContent = capitals[0];
card_a.classList.add("card");
card_b.classList.add("card");
pair.appendChild(card_a);
pair.appendChild(card_b);
set.appendChild(pair);

