console.log("canvas test project");

var canvas = document.querySelector('canvas');

console.log(canvas);

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

var context = canvas.getContext('2d');
//returning a drawing context or passing a ton of methods(which can be used to draw) to context      
context.fillRect(125,125,100,125);                      