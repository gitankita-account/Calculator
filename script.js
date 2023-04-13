let screen = document.getElementById("screen");
// let buttons = document.getElementById("button")
var inputvalue = "";

function show(e){

    screen.value += e;

}
function Calculate(){
   try{
    screen.value = eval(screen.value)
   }
   catch(err){
    alert("invalid")
   }
// if(screen.value == '='){
//     screen.value = eval(inputvalue)
// }else{
//     alert("invalid")
// }

}
function clr(){
    screen.value = ""
}
function del(){
    screen.value = screen.value.slice(0,-1)
}

