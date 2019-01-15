// canvas.js
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

function Rectangle(canvas,x,y) {
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
		if(e.key==="ArrowUp"&&self.y>=30){
			self.hop();
			self.draw();
		}
		if(e.key==="ArrowDown"&&self.y<=470){
			self.fall();
			self.draw();
		}
		if(e.key==="ArrowLeft"&&self.x>=30){
			self.moveLeft();
			self.draw();
		}
		if(e.key==="ArrowRight"&&self.x<=470){
			self.moveRight();
			self.draw();
		}
	});
	
}

Rectangle.prototype.hop = function() {
	this.y -= 10;
}

Rectangle.prototype.fall = function() {
	this.y += 10;
}

Rectangle.prototype.moveLeft = function() {
	this.x -= 10;
}

Rectangle.prototype.moveRight = function() {
	this.x += 10;
}

Rectangle.prototype.draw = function() {
	this.canvasCtx.save();
	var image = new Path2D('M'+this.x +' '+this.y+' h 80 v -80 Z');
	this.canvasCtx.fillStyle = "rgba(100,200,200,1)";
	this.canvasCtx.fill(image);
	this.canvasCtx.restore();
}


// application.js
document.addEventListener("DOMContentLoaded",function() {	// 로드시 이벤트
	var canvas = document.querySelector('.my-canvas');
	var manager = new CanvasManager(canvas);
	var rectangle = new Rectangle(canvas,20,480);
});