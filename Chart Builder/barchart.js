var canvas ;
var context ;
var Val_Max;
var Val_Min;
var sections;
var xScale;
var yScale;
var y;
var header;
// values of each item on the graph
var itemName = [ "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];
var itemValue = [0,0,0,0,0];

function createOne(){
  var inputs = document.sales.elements["productOne[]"];
  for(i=0; i<inputs.length; i++){
    itemValue[i] = inputs[i].value;
  }
  canvas = document.getElementById("canvasOne");
  header = document.getElementById("product1").value + " Sales in Ten Thousands";
  clear();
  init();
}

function createTwo(){
  var inputs = document.sales.elements["productTwo[]"];
  for(i=0; i<inputs.length; i++){
    itemValue[i] = inputs[i].value;
  }
  canvas = document.getElementById("canvasTwo");
  header = document.getElementById("product2").value + " Sales in Ten Thousands";
  clear();
  init();
}

function createThree(){
  var inputs = document.sales.elements["productThree[]"];
  for(i=0; i<inputs.length; i++){
    itemValue[i] = inputs[i].value;
  }
  canvas = document.getElementById("canvasThree");
  header = document.getElementById("product3").value +" Sales in Ten Thousands";
  clear();
  init();
}

function clear() {
	context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
    canvas.width = 650;
    canvas.height = 400;
}

function init() {
	// intialize values for each variables
	sections = 5;
	Val_Max = Math.max.apply(null, itemValue);
	var stepSize = 1;
	var columnSize = 50;
	var rowSize = 60;
	var margin = 10;

	context = canvas.getContext("2d");
	context.fillStyle = "#000;"

	yScale = (canvas.height - columnSize - margin) / (Val_Max);
	xScale = (canvas.width - rowSize) / (sections + 1);

	context.strokeStyle="#000;"; // background black lines
	context.beginPath();
	// column names
	context.font = "19 pt Arial;"
	context.fillText(header, 0,columnSize - margin);
	// draw lines in the background
	context.font = "16 pt Helvetica"
	var count =  0;
	for (scale=Val_Max;scale>=0;scale = scale - stepSize) {
		y = columnSize + (yScale * count * stepSize);
		context.fillText(scale, margin,y + margin);
		context.moveTo(rowSize,y)
		context.lineTo(canvas.width,y)
		count++;
	}
  	context.closePath();
	context.stroke();

	// print names of each data entry
	context.font = "20 pt Verdana";
	context.textBaseline="bottom";
	for (i=0;i<5;i++) {
		computeHeight(itemValue[i]);
		context.fillText(itemName[i], xScale * (i+1),y - margin);
	}

	// shadow for graph's bar lines with color and offset
	context.fillStyle="#9933FF;";
  	context.shadowColor = 'rgba(128,128,128, 0.5)';

  	//shadow offset along X and Y direction
	context.shadowOffsetX = 9;
	context.shadowOffsetY = 3;

	// translate to bottom of graph  inorder to match the data
  	context.translate(0,canvas.height - margin);
	context.scale(xScale,-1 * yScale);

	// draw each graph bars
	for (i=0;i<5;i++) {
		context.fillRect(i+1, 0, 0.3, itemValue[i]);
	}
}

function computeHeight(value) {
	y = canvas.height - value * yScale ;
}
