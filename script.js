let cnt = 0;
let p = document.getElementById("save-el").innerText;
p += " ";
function increment(){
    cnt++;
    document.getElementById("count-el").innerText = cnt;
}

function save(){
    p += cnt + " - ";
    document.getElementById("save-el").innerText = p;
    cnt = 0;
    document.getElementById("count-el").innerText = cnt;
    
}