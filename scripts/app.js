//     $(this).attr('data-before','bar');

var addInput = document.getElementById("add-items-here");
var addButton = document.getElementsByTagName("button")[0];
var incompleteContainer = document.getElementById("incomplete-items");
var completeContainer = document.getElementById("complete-items");

var today = new Date();
var todaysMonth = today.getMonth() + 1;
var todaysYear = today.getFullYear();
var todaysDate = today.getDate();


//Build a new list item
var createNewItem = function(){
  var newListItem = document.createElement("li");
  var newCheckBox = document.createElement("input"); //checkbox
  newCheckBox.setAttribute("type","checkbox");
  var newLabel = document.createElement("label");
  newLabel.innerHTML = document.getElementById("add-items-here").value;
  var newEditInput = document.createElement("input"); // text
  newEditInput.setAttribute("type", "text");
  var newEditButton = document.createElement("button"); // Edit
  newEditButton.innerHTML = '<i class="fa fa-pencil-square-o" aria-hidden="true">';
  var newDeleteButton = document.createElement("button"); // Delete

  newListItem.appendChild(newCheckBox);
  newListItem.appendChild(newLabel);
  newListItem.appendChild(newEditInput);
  newListItem.appendChild(newEditButton);
  newListItem.appendChild(newDeleteButton);


  return newListItem;

}

// var appendListItem = function(itemToAppend, containerToAppend){
//   containerToAppend.appendChild(itemToAppend);
// }

var addItem = function(){
  console.log("add item");
  // When the button is pressed
    // Create a new list item with the text from #add-items-here
    //list item with data-before == todaysDate
      //checkbox
      //label with document.getElementById("add-items-here").value
      //input with document.getElementById("add-items-here").value
      // button.edit
      // button.delete

  var listItem = createNewItem();
  incompleteContainer.appendChild(listItem);
  bindItemstoEvents(listItem, markComplete);
}

var editItem = function() {
  console.log("edit item");
}

var deleteItem = function() {
  console.log("delete item");
}

var markComplete = function() {
  console.log("complete item");
  var listItem = this.parentNode;
  completeContainer.appendChild(listItem);
  bindItemstoEvents(listItem, markIncomplete);
}

var markIncomplete = function() {
  console.log("incomplete item");
  var listItem = this.parentNode;
  incompleteContainer.appendChild(listItem);
  bindItemstoEvents(listItem, markComplete);
}

var bindItemstoEvents = function(taskListItem, checkBoxEventHandler) {

      //select its children
      var checkBox = taskListItem.querySelector("input[type='checkbox']");
      var editButton = taskListItem.querySelector("button.edit");
      var deleteButton = taskListItem.querySelector("button.delete");


      //bind editItem to edit button

      editButton.onclick = editItem;

      //bind deleteItem to delete button
      deleteButton.onclick = deleteItem;
      //bind complete-items to checkbox
      checkBox.onchange = checkBoxEventHandler;

      
      //select its children
      //bind editItem to edit button
      //bind deleteItem to delete button
      //bind incomplete-items to checkbox
}

addButton.onclick = addItem;


//cycle over incompleteContainer's ul li's
for(var i = 0; i < incompleteContainer.children.length; i++) {
  // for each li
  console.log("Bind incomplete tasks");

  if (completeContainer.children[i].getAttribute("data-before") === ""){
    incompleteContainer.children[i].setAttribute("data-before", todaysDate);
  }

  bindItemstoEvents(incompleteContainer.children[i], markComplete);
}


//cycle over completeContainer's ul li's
for(var i = 0; i < completeContainer.children.length; i++) {
  // for each li
  console.log(completeContainer.children[i].getAttribute("data-before"));

  if (completeContainer.children[i].getAttribute("data-before") === ""){
    completeContainer.children[i].setAttribute("data-before", todaysDate);
  }


  bindItemstoEvents(completeContainer.children[i], markIncomplete);
}

var markDate = function(){
  var date = todaysDate + "/" + todaysMonth + "/" + todaysYear;
  document.getElementById('today').innerHTML = date;
}
