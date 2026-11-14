let pairsmade = 0;
let decktionary = {

};

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let deckname = urlParams.get("deck_name");
let flashcardarray = JSON.parse(localStorage.getItem(deckname));

if (deckname !== null){
    document.getElementById("deck_name").value = deckname;
    let decknomore = document.createElement("input");
    decknomore.type = "button";
    decknomore.value = "DELETE?"
    decknomore.addEventListener("click", function() {
        //     if(deckbouton.value == "EDIT?"){
        //         deckbouton.value = newkey;
        //     }
        //     else {
        //         deckbouton.value = "EDIT?";
        //     }
        // });
    decknomore.value = "CONFIRM DELETE"
        delete decktionary[newpair.id];
        console.log(decktionary);
    });
    for (let i = 0; i < flashcardarray[0].length; i++){
        let newpair = document.createElement("div");
        pairsmade++;
        newpair.id = "div#" + pairsmade;
        decktionary[newpair.id] = ["", ""];
        let deletepair = document.createElement("input");
        deletepair.type = "button";
        deletepair.classList.add("deletepair");
        deletepair.value = "-";
        let front = document.createElement("input");
        front.type = "text";
        front.classList.add("side");
        front.addEventListener("input", (event) => {
            let currentvalue = event.target.value;
            decktionary[newpair.id][0] = currentvalue;
        });
        front.value = flashcardarray[0][i];
        decktionary[newpair.id][0] = front.value;
        let back = document.createElement("input");
        back.type = "text";
        back.classList.add("side");
        back.addEventListener("input", (event) => {
            let currentvalue = event.target.value;
            decktionary[newpair.id][1] = currentvalue;
        });
        back.value = flashcardarray[1][i];
        decktionary[newpair.id][1] = back.value;
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
        deletepair.addEventListener("click", function() {
            delete decktionary[newpair.id];
            console.log(decktionary);
            deletepair.parentNode.remove();
        });
        console.log(decktionary);

    }
};

let plusbutton = document.getElementById("newcard");
plusbutton.addEventListener("click", function() {
    let newpair = document.createElement("div");
    pairsmade++;
    newpair.id = "div#" + pairsmade;
    decktionary[newpair.id] = ["", ""];
    let deletepair = document.createElement("input");
    deletepair.type = "button";
    deletepair.classList.add("deletepair");
    deletepair.value = "-";
    let front = document.createElement("input");
    front.type = "text";
    front.classList.add("side");
    front.addEventListener("input", (event) => {
        let currentvalue = event.target.value;
        decktionary[newpair.id][0] = currentvalue;
    });
    let back = document.createElement("input");
    back.type = "text";
    back.classList.add("side");
    back.addEventListener("input", (event) => {
        let currentvalue = event.target.value;
        decktionary[newpair.id][1] = currentvalue;
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
    deletepair.addEventListener("click", function() {
        delete decktionary[newpair.id];
        console.log(decktionary);
        deletepair.parentNode.remove();
    });
    console.log(decktionary);
});
let decktosave = [[],[]];
let savebutton = document.getElementById("savedeck");
savebutton.addEventListener("click", function() {
    console.log(Object.keys(decktionary).length);
    for (let i = 0; i < Object.keys(decktionary).length; i++){
        for (let j = 0; j < 2; j++){
            decktosave[j][i] = decktionary[Object.keys(decktionary)[i]][j];
        console.log(decktosave)
    }
    let deckmane = document.getElementById("deck_name").value;
    localStorage.setItem(deckmane, JSON.stringify(decktosave));
}});
