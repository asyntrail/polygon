import {TimelineMax} from 'gsap';
import {TweenMax} from 'gsap';



var canvas = document.getElementById('testPolygon');
let ctx = canvas.getContext('2d');



var points =2000; //количесвто точек
var rad = 100; //радиус
var centerX = 300; //центрование по Х
var centerY = 300; //центрование по Х



ctx.beginPath();

for (var i = 0; i <= points; i++) {
  var teta = i*2*Math.PI/points;
  var setRad = rad + 50*Math.cos(teta*13);
  var x = centerX + setRad*Math.cos(teta);
  var y = centerY + setRad*Math.sin(teta);

  if(i===0) {ctx.moveTo(x,y);}
  else{
    ctx.lineTo(x,y);
  }
}

ctx.closePath();
ctx.stroke(); //обводка

TweenMax.to
('#testPolygon',10,
  {
    rotation: 360, repeat:-1, ease:Power0.easeNone, transformOrigin: 'center center'
  }
);
