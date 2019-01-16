﻿// canvas.js
function CanvasManager(canvas) {
	this.canvas = canvas;
	if (this.canvas.getContext){
  		this.canvasCtx = this.canvas.getContext('2d');
	} 
	else {
 		alert("캔버스를 지원하지 않습니다.");
	}
	this.setup();
	this.drawRect();
	this.drawTriangle();
	this.drawCircle();
	this.drawImage();
}

CanvasManager.prototype.setup = function() {	// 캔버스를 흰색으로 색칠
	this.canvasCtx.fillStyle = "#fff";
	this.canvasCtx.fillRect(0,0,500,500);
}

CanvasManager.prototype.drawRect = function() {	// 사각형 두개 그리기
	this.canvasCtx.fillStyle = "rgba(200,0,0,0.5)";
	this.canvasCtx.fillRect(10,10,50,50);
	this.canvasCtx.fillStyle = "rgba(0,0,200,0.5)";
	this.canvasCtx.fillRect(30,30,50,50);
	
}

CanvasManager.prototype.drawTriangle = function() {	// 삼각형 두개 그리기
	var x1 = new Path2D('M110 10 h 80 v 80 Z');
	var x2 = new Path2D('M100 20 v 80 h 80 Z');
	this.canvasCtx.fillStyle = "rgb(0,0,0)";
	this.canvasCtx.fill(x1);
	this.canvasCtx.stroke(x2);
}

CanvasManager.prototype.drawCircle = function() {	// 원 그리기
	this.canvasCtx.fillStyle = "rgba(100,200,200,0.8)";
	this.canvasCtx.beginPath();
	this.canvasCtx.ellipse(70,170,50,50,0,0,2*Math.PI);
	this.canvasCtx.fill();
}

CanvasManager.prototype.drawImage = function() {	// 이미지 그리기
	var self = this;
	var img = new Image();
	img.addEventListener("load",function(){
		self.canvasCtx.drawImage(img,300,10,100,100);
	},false);
	img.src = 'images/Stitch.jpg';
}
// Rectangle.js

var input = {
	up : false,
	down : false,
	right : false,
	left : false,
	quit : false,
};

var updateInterval;

function Rectangle(canvas,x,y) {
	var self = this;
	this.canvas = canvas;
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.sticks=0;
	
	this.addKeyDownEvent();
	this.draw();
}

Rectangle.prototype.addKeyDownEvent = function() {
	var self = this;
	document.addEventListener("keydown",function(e) {
		if(e.key==="ArrowUp"){
			input.up = true;
		}
		if(e.key==="ArrowDown"){
			input.down = true;
		}
		if(e.key==="ArrowLeft"){
			input.left = true;
		}
		if(e.key==="ArrowRight"){
			input.right = true;
		}
		if(e.key==="q"){
			input.quit = true;
		}
		self.update();
	});	
	document.addEventListener("keyup",function(e) {
		if(e.key==="ArrowUp"){
			input.up = false;
		}
		if(e.key==="ArrowDown"){
			input.down = false;
		}
		if(e.key==="ArrowLeft"){
			input.left = false;
		}
		if(e.key==="ArrowRight"){
			input.right = false;
		}
	});
}



Rectangle.prototype.draw = function() {
	var self = this;
	this.canvasCtx.fillStyle = "rgba(255,255,255,1)";
	this.canvasCtx.fillRect(0,0,500,500);
	if(input.up&&this.y>=14) this.y-=4;
	if(input.down&&this.y<=386) this.y+=4;
	if(input.right&&this.x<=386) this.x+=4;
	if(input.left&&this.x>=14) this.x-=4;
	var img = new Image();
	img.src = 'images/Stitch.jpg';
	self.canvasCtx.drawImage(img,self.x,self.y,100,100);
	
}

Rectangle.prototype.update = function() {
	var self = this;
	if(input.quit) {
		window.clearInterval(updateInterval);
	}
}

// application.js
var rectangle;
document.addEventListener("DOMContentLoaded",function() {	// 로드시 이벤트
	var canvas = document.querySelector('.my-canvas');
	var manager = new CanvasManager(canvas);
	rectangle = new Rectangle(canvas,10,10);
	updateInterval = window.setInterval("rectangle.draw()",30);	
});
