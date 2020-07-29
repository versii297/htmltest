const clear = document.querySelector(".clear");
const dateElement = document.querySelector("#date");
const list = document.querySelector("#list");
const input = document.querySelector("#input");

//classes names
const CHECK = "fas fa-check-circle";
const UNCHECK = "far fa-circle";
const LINE_THROUGH = "lineThrough";

//VARIABLES
let LIST = []
  , id = 0;

//get item from local storage
let data = localStorage.getItem("TODO");

//if data is not empty
if (data){
  LIST = JSON.parse(data);
  loadList(LIST);
  id = LIST.length;
}else{
  LIST = [];
  id = 0;
}

//load items to user interface
function loadList(array){
  array.forEach(function(item){
addToDo(item.name, item.id, item.done, item.trash);
  });
}

clear.addEventListener('click', function(){
  localStorage.clear();
  location.reload();
});


//todays date
const options = {weekday: "long", month: "short", day:"numeric"}
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//add to do function

function addToDo(toDo, id, done, trash){
  if(trash){return;}

  const DONE = done ? CHECK: UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  const item = `<li class="item">
          <i class="${DONE}" job="complete" id="${id}"></i>
          <span class="text ${LINE}">${toDo}</span>
          <i class="far fa-trash-alt    " job="delete" id="${id}"></i>
        </li>`

  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

//add item to list
document.addEventListener("keyup", function(event){
  if(event.keyCode == 13){
    const toDo = input.value;
    //if the input isn't empty
    if(toDo){
      addToDo(toDo,id,false,false);
      LIST.push(
        {
          name: toDo,
          id: id,
          done: false,
          trash: false
        }
      );
      //add item to local storage
      localStorage.setItem("TODO", JSON.stringify(LIST));

      id++;
    }
      input.value = ""; 
    }
    
  });

// complete to do
function completeToDo(element){
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);

  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
  LIST[element.id].done = LIST[element.id].done ? false : true;
}

// remove to do
function removeToDo(element){
  element.parentNode.parentNode.removeChild(element.parentNode);
  
  LIST[element.id].trash = true;
}

// target items
list.addEventListener("click", function(event){
  let element = event.target;
  const elementJob = event.target.attribute.job.value;

  if (elementJob == "complete"){
    completeToDo(element);
  } else if (elementJob == "delete"){
    removeToDo(element);
  }
  //add item to local storage
localStorage.setItem("TODO", JSON.stringify(LIST));
});

/*



function loadToDo (array){
  
}



*/