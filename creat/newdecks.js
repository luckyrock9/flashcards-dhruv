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
    console.log(decknomore)
    decknomore.type = "button";
    decknomore.value = "DELETE?";
    document.getElementById("mainbuttons").appendChild(decknomore)

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
            deletepair.parentNode.remove();
        });
    };
    decknomore.addEventListener("click", function() {
        if (decknomore.value === "DELETE?") {
            decknomore.value = "CONFIRM DELETE";
            deleteTimeout = setTimeout(() => {
                decknomore.value = "DELETE?";
            }, 3000);
        }
        else {
            localStorage.removeItem(deckname);
            decktionary = {};
            document.getElementById("main").innerHTML = "";
            document.getElementById("deck_name").value = "";
            decknomore.remove();
        }
    });
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
        deletepair.parentNode.remove();
    });
});
let decktosave = [[],[]];
let savebutton = document.getElementById("savedeck");
savebutton.addEventListener("click", function() {
    for (let i = 0; i < Object.keys(decktionary).length; i++){
        for (let j = 0; j < 2; j++){
            decktosave[j][i] = decktionary[Object.keys(decktionary)[i]][j];
        }
    let deckmane = document.getElementById("deck_name").value;
    localStorage.setItem(deckmane, JSON.stringify(decktosave));
}});
