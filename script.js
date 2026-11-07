for (i=0; i<= localStorage.length; i++){
    let newkey = localStorage.key(i);
    let deckbouton = document.createElement("input");
    deckbouton.classList.add("deck");
    deckbouton.type = "button";
    deckbouton.value = newkey;
    deckbouton.onclick = function(){
        if(deckbouton.value == newkey){
            window.location.href='./cards/deck.html?deck_name=' + newkey;
        }
        else {
            localStorage.removeItem(newkey);
            deckbouton.remove();
        }
        
    }
    deckbouton.addEventListener("contextmenu", function(e){
        e.preventDefault();
        if(deckbouton.value == "DELETE?"){
            deckbouton.value = newkey;
        }
        else {
            deckbouton.value = "DELETE?";
        }
    });
    console.log(newkey);
    document.getElementById("deckplace").appendChild(deckbouton);
}