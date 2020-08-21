const clear= document.querySelector(".clear");
const dateElement=document.getElementById("date");
const list=document.getElementById("list");
const input=document.getElementById("input");


//Variables
let LIST=[],
id=0;

//Classes names
const CHECK="fa-check-circle";
const UNCHECK="fa-circle-thin";
const LINE_THROUGH="lineThrough";

//Show todays date
const options={weekday : "long", month:"short", day:"numeric"}
const today=new Date();

dateElement.innerHTML=today.toLocaleDateString("en-US", options);

function addToDo(toDo, id, done, trash){

    if(trash){ return; }

    const DONE=done?CHECK:UNCHECK;
    const LINE=done?LINE_THROUGH:"";
    const item= ` <li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE}">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
      </li>` ;

     const position="beforeend";
     list.insertAdjacentHTML(position,item);

}
function adding(){
    const toDo=input.value;
        if(toDo){
            addToDo(toDo, id, false, false);
            LIST.push(
                {
                    name:toDo,
                    id:id,
                    done:false,
                    trash:false
                }
            );
            
            id++;
        }
        input.value="";
}

document.querySelector(".addtodo").addEventListener("click",adding);
document.addEventListener("keypress", function(event){
    if(event.keyCode == 13){
        adding();
    }
});
function refresh(){
    location.reload();
}
document.querySelector(".cbtn").addEventListener("click",refresh);
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done= LIST[element.id].done?false:true;
}
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash=true;
}
//target the items created dynamically
list.addEventListener("click", function(event){
    const element=event.target;
    const elementJob=element.attributes.job.value;

    if(elementJob == "complete"){
        completeToDo(element);
    }
    else if(elementJob == "delete"){
        removeToDo(element);
    }

});

document.querySelector("#submit").addEventListener("click",display);
function display(){
        var arr=LIST.map(function(curr){
            return curr.name;
        });
        for(var i=0;i<arr.length;i++){
            const items= `<li class="item"><p class="text">${arr[i]}</p></li>`;
            const position="beforeend";
        text.insertAdjacentHTML(position,items);
        }
}
