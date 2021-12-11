const input=document.querySelector("#input");
function addInput(number){
    input.value = input.value +number;
}
function result(){
    input.value = eval(input.value);
}
function clearChrac(){
    var number = document.querySelector("#input");
    var remove = number.value;
    remove = remove.slice(0,-1);
    number.value = remove
}