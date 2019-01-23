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

// Move.js
var input = {	// 키 눌려있는 상태
	up : false,
	down : false,
	right : false,
	left : false,
	space : false,
	quit : false,
};

var updateInterval;

function Stitch(canvas,x,y) {	// 스티치
	var self = this;
	this.canvas = canvas;
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.width = 80;
	this.height = 96;
	this.sticks=0;
	this.delay = 1000;
	this.deltaTime = 1000;
	this.time = performance.now();


	this.addKeyDownEvent();
	this.arrow = [];
	this.draw();
}

Stitch.prototype.addKeyDownEvent = function() {		// 키 눌렀을때 이벤트
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
			self.update();
		}
		if(e.key===" "){
			input.space = true;
		}
		
	});	
	document.addEventListener("keyup",function(e) {		// 키를 떼었을때 이벤트
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
		if(e.key===" ") {
			input.space = false;
		}
	});
}



Stitch.prototype.draw = function() {	// 객체 그리기
	var self = this;
	this.canvasCtx.fillStyle = "rgba(255,255,255,1)";
	this.canvasCtx.fillRect(0,0,500,500);
	if(input.up&&this.y>=14) this.y-=4;
	if(input.down&&this.y<=386) this.y+=4;
	if(input.right&&this.x<=386) this.x+=4;
	if(input.left&&this.x>=14) this.x-=4;
	var img = new Image();
	img.src = 'images/Stitch.jpg';
	self.canvasCtx.drawImage(img,self.x,self.y,self.width,self.height);
	
}

Stitch.prototype.checkArrow = function() {	// 시간이 지났다면 하나 생성
	var self = this;
	this.deltaTime = performance.now() - this.time;
	var randomX = Math.floor(Math.random()*50);
	var randomY = self.y+self.height/2-18;
	if(input.space&&this.delay<this.deltaTime){
		this.time = performance.now();
		this.arrow.push(new Arrow(randomX,randomY));
	}
}

Stitch.prototype.checkCollision = function() {
	var self = this;
	self.arrow.forEach(function (instance) {
		var condition1 = self.x+self.width>instance.x && self.x<instance.x && self.y+self.height>instance.y && self.y<instance.y;
		var condition2 = self.x<instance.x+instance.width && self.x+self.width>instance.x+instance.width && self.y+self.height>instance.y && self.y< instance.y;
		var condition3 = self.x+self.width>instance.x && self.x < instance.x && self.y < instance.y + instance.height && self.y+self.height > instance.y+instance.height;
		var condition4 = self.x<instance.x+instance.width && self.x+self.width > instance.x + instance.width && self.y < instance.y + instance.height && self.y + self.height > instance.y + instance.height;
		if(condition1 || condition2 || condition3 || condition4){
			alert("충돌");
		}
	});
}

Stitch.prototype.update = function() {	//	업데이트
	var self = this;
	self.checkArrow();
	self.checkCollision();
	if(input.quit) {
		window.clearInterval(updateInterval);
	}
	self.draw();
	self.arrow.forEach(function (instance){
		instance.draw();
	});
}

// arrow.js

function Arrow(x,y) {
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.width = 30;
	this.height = 36;
	this.deltaTime;
	this.time = performance.now();
}

Arrow.prototype.draw = function() {
	var self = this;
	self.deltaTime = performance.now() - self.time;
	self.time = performance.now();
	self.x += Math.floor(self.deltaTime * 0.3);
	var img = new Image();
	img.src = 'images/Stitch.jpg';
	self.canvasCtx.drawImage(img,self.x,self.y,self.width,self.height);
}



// application.js
var stitch;
document.addEventListener("DOMContentLoaded",function() {	// 로드시 이벤트
	var canvas = document.querySelector('.my-canvas');
	var manager = new CanvasManager(canvas);
	stitch = new Stitch(canvas,10,10);
	updateInterval = window.setInterval("stitch.update()",30);	// 0.03초마다 스티치 드로우
		
});
