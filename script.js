let registerbt = document.getElementById("bt1");
let modal = document.getElementById("themodal");
let close = document.getElementById("modalclose");
registerbt.onclick = function formfunc(){
    modal.style.display = "block";
};
close.onclick = function closefunc(){
    modal.style.display = "none";
}