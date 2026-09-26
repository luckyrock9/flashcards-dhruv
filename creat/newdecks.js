
let pairsmade = 0


let plusbutton = document.getElementById("newcard");
plusbutton.addEventListener("click", function() {
    let newpair = document.createElement("div");
    pairsmade++;
    newpair.id = "div#" + pairsmade
    let deletepair = document.createElement("input");
    deletepair.type = "button";
    deletepair.classList.add("deletepair");
    deletepair.value = "-";
    let front = document.createElement("input");
    front.type = "text";
    front.classList.add("side");
    let back = document.createElement("input");
    back.type = "text";
    back.classList.add("side");
    newpair.appendChild(deletepair);
    newpair.appendChild(front);
    newpair.appendChild(back);
    let main = document.getElementById("main");
    main.appendChild(newpair);
    console.log("oar");
    deletepair.addEventListener("click", function() {
        deletepair.parentNode.remove()
    });
});
