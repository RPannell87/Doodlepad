//Javascript for my Doodlepad project//
//const container = document.getElementById('container');//
var input2 = prompt('Please enter a number between 1-250', '100');

if (input2 > 250 || input2 < 1)
  prompt('That won\'t work. Please enter a number between 1-250');
  document.getElementById("size").innerHTML = input2;

var input = input2;
var percentOfInput = 1/input;

document.get

function gridSetup() {
for (i=0; i < input; i++){
  var newDiv = document.createElement('div');
  newDiv.className = 'grid-div';
  newDiv.setAttribute('id', 'new' + i);
  document.getElementById('container').appendChild(newDiv);


for (j=0; j < input; j++){
  var columnDiv = document.createElement('div');
  columnDiv.className = 'column-div';
  columnDiv.setAttribute('id', 'new' + i + 'column' + j);
  columnDiv.setAttribute('onmouseover', 'this.style.background = "yellow"');
  document.getElementById('new' + i).appendChild(columnDiv);

}
}
}
gridSetup();

var gridDiv = document.querySelectorAll('.grid-div');
var colDiv = document.querySelectorAll('.column-div');
var percent = 1024/input;

for (var i=0; i < gridDiv.length; i++) {
//  gridDiv[i].style.width = percent + "px";//
  gridDiv[i].style.height = percent + "px";
  //gridDiv[i].style.backgroundColor = "black";//
}
for (var i=0; i < colDiv.length; i++) {
  colDiv[i].style.width = percentOfInput*100 + "%";
  colDiv[i].style.height = percent + "px";
  colDiv[i].style.backgroundColor = "darkgreen";
  colDiv[i].style.float = "left";
}


container.style.color = "white";
container.style.width = "1024px";
container.style.height = "1024px";
