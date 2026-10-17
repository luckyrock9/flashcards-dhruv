
let pairsmade = 0
let decktionary = {

}


let plusbutton = document.getElementById("newcard");
plusbutton.addEventListener("click", function() {
    let newpair = document.createElement("div");
    pairsmade++;
    newpair.id = "div#" + pairsmade
    decktionary[newpair.id] = ["", ""]
    let deletepair = document.createElement("input");
    deletepair.type = "button";
    deletepair.classList.add("deletepair");
    deletepair.value = "-";
    let front = document.createElement("input");
    front.type = "text";
    front.classList.add("side");
    front.addEventListener("input", (event) => {
        let currentvalue = event.target.value;
        decktionary[newpair.id][0] = currentvalue
    });
    let back = document.createElement("input");
    back.type = "text";
    back.classList.add("side");
    back.addEventListener("input", (event) => {
        let currentvalue = event.target.value;
        decktionary[newpair.id][1] = currentvalue
    });
    let cardcount = document.createElement("input");
    cardcount.type = "button";
    cardcount.classList.add("number");
    cardcount.value = pairsmade;
    newpair.appendChild(deletepair);
    newpair.appendChild(front);
    newpair.appendChild(back);
    newpair.appendChild(cardcount);
    let main = document.getElementById("main");
    main.appendChild(newpair);
    console.log("oar");
    deletepair.addEventListener("click", function() {
        delete decktionary[newpair.id];
        console.log(decktionary);
        deletepair.parentNode.remove();
    });
    console.log(decktionary)
});

let savebutton = document.getElementById("savedeck");
savebutton.addEventListener("click", function() {
    localStorage.setItem("Customdeck", JSON.stringify(decktionary))
});