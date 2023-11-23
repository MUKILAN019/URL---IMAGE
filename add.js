const listener=document.getElementById("text");
const containerText=document.getElementById("con1");
let array=[];
function myFunc(){
    array.push(listener.value)
    containerText.innerHTML= ""
    listener.value= ""
    console.log(listener.value)
    for(i=0;i<array.length;i++){
        let addiMg=document.createElement("img");
        addiMg.src=array[i];
        containerText.appendChild(addiMg);
        console.log(addiMg)
    }
}