document.getElementById('button1').onclck = function()
{
alert("Hello!");
let canvas = document.getElementById('main_canvas');
let context = canvas.getContext('2d');
context.fillRect(0,0,100,100);
}
