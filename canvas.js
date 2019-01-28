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

function inputReset() {	// 인풋 초기화
	input.up = false;
	input.down = false;
	input.right = false;
	input.left = false;
	input.space = false;
	input.quit = false;
}

var updateInterval;

function Stitch(canvas,x,y) {	// 스티치
	var self = this;
	this.canvas = canvas;
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.width = 80;
	this.height = 96;
	this.score = 0;
	this.gold = 0;
	this.damage = 40;
	this.delay = 300;
	this.deltaTime = 1000;
	this.time = performance.now();
	this.spawnDelay = 1000;
	this.spawnDeltaTime = 0;
	this.spawnTime = performance.now();

	this.addKeyDownEvent();
	this.arrow = [];
	this.monster = [];
	this.draw();
}

function keyDownEvent(e) {	// 키다운 이벤트
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
		if(e.key===" "){
			input.space = true;
		}
}

function keyUpEvent(e) {	// 키업 이벤트
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
}

function clickEvent(e) {	// 클릭 이벤트
	var x = e.clientX;
	var y = e.clientY;
	console.log(x);
	console.log(y);
	if(x>71&&x<155&&y>252&&y<279){
		stitch.reStart();
	}
	if(x>71&&x<370&&y>303&&y<331){
		if(stitch.damage*100<=stitch.gold){
			stitch.gold -= stitch.damage*100;
			stitch.damage+=20;
			stitch.showMenu();
			
		}
	}
}

Stitch.prototype.reStart = function(){
	var self = this;
	self.x = 10;
	self.y = 10;
	self.monster = [];
	self.arrow = [];
	updateInterval = window.setInterval("stitch.update()",1000/60);
	self.removeClickEvent();
	self.addKeyDownEvent();

}

Stitch.prototype.addKeyDownEvent = function() {		// 키 눌렀을때 이벤트
	var self = this;
	document.addEventListener("keydown",keyDownEvent,false);
	document.addEventListener("keyup",keyUpEvent,false);
}

Stitch.prototype.removeKeyDownEvent = function() {	// 이벤트 삭제
	document.removeEventListener("keydown",keyDownEvent);
	document.removeEventListener("keyup",keyUpEvent);
}

Stitch.prototype.addClickEvent = function() {
	var self = this;
	document.addEventListener("click",clickEvent,false);
}

Stitch.prototype.removeClickEvent = function() {
	document.removeEventListener("click",clickEvent);
}

Stitch.prototype.draw = function() {	// 객체 그리기
	var self = this;
	this.canvasCtx.fillStyle = "rgba(255,255,255,1)";
	this.canvasCtx.fillRect(0,0,500,500);
	if(input.up&&this.y>=14) this.y-=6;
	if(input.down&&this.y<=386) this.y+=6;
	if(input.right&&this.x<=386) this.x+=6;
	if(input.left&&this.x>=14) this.x-=6;
	var img = new Image();
	img.src = 'images/Stitch.jpg';
	self.canvasCtx.drawImage(img,self.x,self.y,self.width,self.height);
	
}

Stitch.prototype.checkArrow = function() {	// 시간이 지났다면 화살 생성
	var self = this;
	this.deltaTime = performance.now() - this.time;
	var randomX = self.x+self.width/2-10;
	var randomY = self.y+self.height/2-10;
	var vy = 0;
	var g = 0;
	if(Math.random()>0){
		vy = -6;
		g = 0.2;
	}
	var vx = 4;
	if(input.space&&this.delay<this.deltaTime){
		this.time = performance.now();
		this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,self.damage));
	}
}

Stitch.prototype.checkMonster = function() {	// 시간이 지나면 몬스터 생성
	var self = this;
	this.spawnDeltaTime = performance.now() - this.spawnTime;
	var randomX = 450 + Math.floor(Math.random()*50);
	var randomY = Math.floor(Math.random()*500);
	var randomName = Math.random()>0.8? "Slime":"Snail";
	if(this.spawnDelay<this.spawnDeltaTime){
		this.spawnTime = performance.now();
		this.monster.push(new Monster(randomX,randomY,randomName));
	}
}

Stitch.prototype.checkCollision = function() {	// 몬스터와 스티치 충돌 이벤트
	var self = this;
	var n = 0;
	self.monster.forEach(function (instance) {
		var condition1 = self.x+self.width>instance.x && self.x<instance.x && self.y+self.height>instance.y && self.y<instance.y;
		var condition2 = self.x<instance.x+instance.width && self.x+self.width>instance.x+instance.width && self.y+self.height>instance.y && self.y< instance.y;
		var condition3 = self.x+self.width>instance.x && self.x < instance.x && self.y < instance.y + instance.height && self.y+self.height > instance.y+instance.height;
		var condition4 = self.x<instance.x+instance.width && self.x+self.width > instance.x + instance.width && self.y < instance.y + instance.height && self.y + self.height > instance.y + instance.height;
		if(condition1 || condition2 || condition3 || condition4){
			input.quit = true;
		}
		instance.checkCollision(self.arrow);
		self.monsterHpCheck(n);
		n++;
	});
}

Stitch.prototype.monsterHpCheck = function(n) {	// 죽었다면 제거
	var self = this;
	if(self.monster[n].hp<=0){
		self.score += self.monster[n].maxHp;
		self.monster.splice(n,1);
	} 
}

Stitch.prototype.drawScore = function() {	// 점수 출력
	var self = this;
	this.canvasCtx.font = "16px Arial";
	this.canvasCtx.fillStyle = "#0095DD";
	this.canvasCtx.fillText("Score: " + self.score,8,20);

}

Stitch.prototype.quit = function() {	// quit 눌렷을시
	var self = this;
	inputReset();
	window.clearInterval(updateInterval); 	// 인터벌 제거
	self.removeKeyDownEvent();
	self.gold += self.score;
	self.score = 0;
	self.showMenu();
}

Stitch.prototype.showMenu = function() {	// 메뉴 출력
	var self = this;
	this.addClickEvent();
	this.canvasCtx.fillStyle = "rgba(255,255,255,1)";
	this.canvasCtx.fillRect(0,0,500,500);
	this.canvasCtx.font = "30px Arial";
	this.canvasCtx.fillStyle = "#008899";
	this.canvasCtx.fillText("메뉴",20,40);
	this.canvasCtx.fillStyle = "#880099";
	this.canvasCtx.fillText("Gold: " + self.gold,20,90);
	this.canvasCtx.fillStyle = "#998800";
	this.canvasCtx.fillText("재시작",20,140);
	this.canvasCtx.fillStyle = "#666666";
	this.canvasCtx.fillText("공격력: " + self.damage + " (cost: " + self.damage*100 + ")",20,190);
	
}

Stitch.prototype.update = function() {	//	업데이트
	var self = this;
	self.checkArrow();
	self.checkMonster();
	self.checkCollision();
	
	self.draw();
	self.monster.forEach(function (instance){
		instance.draw();
	});
	self.arrow.forEach(function (instance){
		instance.draw();
	});
	self.drawScore();
	if(input.quit) {
		self.quit();
	}
}


// arrow.js

function Arrow(x,y,vx,vy,g,damage) {	// 화살
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.damage = damage;
	this.g = g;
	this.width = 20;
	this.height = 20;
}

Arrow.prototype.draw = function() {	// 화살 그리기
	var self = this;
	self.vy += self.g;
	self.x += self.vx;
	self.y += self.vy;
	var img = new Image();
	img.src = 'images/Star.png';
	self.canvasCtx.drawImage(img,self.x,self.y,self.width,self.height);
}

// monster.js

function Monster(x,y,name) {	// 몬스터
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.vx = -1.5;
	this.name = name;

	this.init();
}

Monster.prototype.init = function() {	// 초기화
	switch(this.name) {
		case "Slime" :
			this.width = 69;
			this.height = 47;
			this.maxHp = 100;
			this.vx = -1.5;
			break;
		case "Snail" :
			this.width = 42;
			this.height = 33;
			this.maxHp = 30;
			this.vx = -2;
			break;
		case "Resh" :
			this.width = 65;
			this.height = 56;
			this.maxHp = 200;
			this.vx = -2;
			break;
		case "Harf" :
			this.width = 73;
			this.height = 96;
			this.maxHp = 300;
			this.vx = -2;
			break;
		case "Threetale" :
			this.width = 95;
			this.height = 75;
			this.maxHp = 500;
			this.vx = -2;
			break;
		case "DualBurk" :
			this.width = 93;
			this.height = 70;
			this.maxHp = 600;
			this.vx = -2;
			break;
		case "Ghost" :
			this.width = 42;
			this.height = 33;
			this.maxHp = 700;
			this.vx = -2;
			break;
		default :
			this.width = 67;
			this.height = 92;
			this.maxHp = 30;
			this.vs = -2;
			this.name = "snail";
	}
	this.hp = this.maxHp;
}

Monster.prototype.checkCollision = function(arrow) {	// 몬스터와 화살 충돌 이벤트
	var self = this;
	var n =0;
	arrow.forEach(function (instance) {
		var condition1 = self.x+self.width>instance.x && self.x<instance.x && self.y+self.height>instance.y && self.y<instance.y;
		var condition2 = self.x<instance.x+instance.width && self.x+self.width>instance.x+instance.width && self.y+self.height>instance.y && self.y< instance.y;
		var condition3 = self.x+self.width>instance.x && self.x < instance.x && self.y < instance.y + instance.height && self.y+self.height > instance.y+instance.height;
		var condition4 = self.x<instance.x+instance.width && self.x+self.width > instance.x + instance.width && self.y < instance.y + instance.height && self.y + self.height > instance.y + instance.height;
		if(condition1 || condition2 || condition3 || condition4){
			self.hp-= instance.damage;
			arrow.splice(n,1);
		}
		n++;
	});

}

Monster.prototype.draw = function() {	// 몬스터 그리기
	var self = this;
	self.x += self.vx 
	var img = new Image();
	img.src = 'images/'+self.name+'.png';
	self.canvasCtx.drawImage(img,self.x,self.y,self.width,self.height);
}


// application.js
var stitch;
document.addEventListener("DOMContentLoaded",function() {	// 로드시 이벤트
	var canvas = document.querySelector('.my-canvas');
	var manager = new CanvasManager(canvas);
	stitch = new Stitch(canvas,10,10);
	updateInterval = window.setInterval("stitch.update()",1000/60);	// 0.03초마다 스티치 드로우
		
});
