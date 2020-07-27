var list = document.getElementById("list");


function addTodo(){
    var todo_item = document.getElementById("todo-item")
    
    var li = document.createElement("li")
    var liText = document.createTextNode(todo_item.value)
    


    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")

    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText);

    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
   
   
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editItem(this)");



    li.appendChild(delBtn)
    li.appendChild(editBtn)

    li.appendChild(liText)
    list.appendChild(li)
    todo_item.value = "";

}

function deleteItem(e){
    e.parentNode.remove();
    // console.log(e.parentNode)
}

function deleteAll(){
    list.innerHTML = "";
}

function editItem(e){
    var editValue = prompt("Enter Edit Value", e.parentNode.firstChild.nodeValue);
    // console.log(editValue)
    e.parentNode.firstChild.nodeValue = editValue;
}