var canvas ;
var context ;
var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;
		// Values for the Data Plot, they can also be obtained from a external file
var productA =  [10, 12, 8, 10, 12];
var productB = [3, 5, 7, 8, 9];
var productC =   [2, 5, 1, 2, 3];

function createNew() {
	editProductA();
	editProductB();
	editProductC();
	canvas = document.getElementById("canvas");
	clear();
	create();
}

function editProductA(){
	var inputs = document.sales.elements["productOne[]"];
  for(i=0; i<inputs.length; i++){
    productA[i] = inputs[i].value;
  }
}

function editProductB(){
	var inputs = document.sales.elements["productTwo[]"];
  for(i=0; i<inputs.length; i++){
    productB[i] = inputs[i].value;
  }
}

function editProductC(){
	var inputs = document.sales.elements["productThree[]"];
  for(i=0; i<inputs.length; i++){
    productC[i] = inputs[i].value;
  }
}

function clear() {
	  context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width,canvas.height);
    canvas.width = 650;
    canvas.height = 400;
}

function create() {
		// set these values for your data
	sections = 5;
	Val_max = 20;
	Val_min = 0;
	var stepSize = 2;
	var columnSize = 50;
	var rowSize = 50;
	var margin = 10;
	var xAxis = [" ", "Year One", "Year Two", "Year Three", "Year Four", "Year 5"]
		//

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	context.fillStyle = "#566573"
	context.font = "20 pt Verdana"

	yScale = (canvas.height - columnSize - margin) / (Val_max - Val_min);
	xScale = (canvas.width - rowSize) / sections;

	context.strokeStyle="#009933"; // color of grid lines
	context.beginPath();
		// print Parameters on X axis, and grid lines on the graph
	for (i=1;i<=sections;i++) {
		var x = i * xScale;
		context.fillText(xAxis[i], x,columnSize - margin);
		context.moveTo(x, columnSize);
		context.lineTo(x, canvas.height - margin);
	}
		// print row header and draw horizontal grid lines
	var count =  0;
	for (scale=Val_max;scale>=Val_min;scale = scale - stepSize) {
		var y = columnSize + (yScale * count * stepSize);
		context.fillText(scale, margin,y + margin);
		context.moveTo(rowSize,y)
		context.lineTo(canvas.width,y)
		count++;
	}
	context.stroke();

	context.translate(rowSize,canvas.height + Val_min * yScale);
	context.scale(1,-1 * yScale);

		// Color of each dataplot items

	context.strokeStyle="#FF0066";
	plotData(productA);
	context.strokeStyle="#9933FF";
	plotData(productB);
	context.strokeStyle="#FF5733";
	plotData(productC);
}

function plotData(dataSet) {
	context.beginPath();
	context.moveTo(0, dataSet[0]);
	for (i=1;i<sections;i++) {
		context.lineTo(i * xScale, dataSet[i]);
	}
	context.stroke();
}
