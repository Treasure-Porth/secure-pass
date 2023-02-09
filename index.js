const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass = "";
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")
let button1 = "";

function generatepass() {
    pass = ""
    button1 = ""
    for(let i = 0; i < 15; i++) {
        let one = Math.floor(Math.random() * characters.length)
        let two = Math.floor(Math.random() * characters.length)
        pass += characters[one]
        button1 += characters[two]
    }
    pass1.textContent = pass
    pass2.textContent = button1
}

function copy1() {
    let copyText = pass1.textContent;
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
  }
  function copy2() {
    let copyText1 = pass2.textContent;
    navigator.clipboard.writeText(copyText1);
    alert("Copied the text: " + copyText1);
  }