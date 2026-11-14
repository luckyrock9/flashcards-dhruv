for (i=0; i<= localStorage.length; i++){
    let newkey = localStorage.key(i);
    let deckbouton = document.createElement("input");
    deckbouton.classList.add("deck");
    deckbouton.type = "button";
    deckbouton.value = newkey;
    deckbouton.onclick = function(){
        if(deckbouton.value == newkey){
            window.location.href='./cards/study.html?deck_name=' + newkey;
        }
        else {
            window.location.href='./creat/newdeck.html?deck_name=' + newkey;
            //localStorage.removeItem(newkey);
            //deckbouton.remove();
        }
        
    }
    deckbouton.addEventListener("contextmenu", function(e){
        e.preventDefault();
        if(deckbouton.value == "EDIT?"){
            deckbouton.value = newkey;
        }
        else {
            deckbouton.value = "EDIT?";
        }
    });
    console.log(newkey);
    document.getElementById("deckplace").appendChild(deckbouton);
}