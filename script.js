

console.log("test")

function response(){
    console.log("Juneau");
    let answer = document.getElementById("textbox").value;
    if (answer == "Juneau"){
        alert("Correct!")
    }
    else{
        alert("Incorrect!")
    }
}

let clashcard = document.getElementById("textbox");

// let clashcard = document.querySelector("input");

document.addEventListener("keyup", function(e){
    if (e.key == "Enter"){
        response()
    }
})