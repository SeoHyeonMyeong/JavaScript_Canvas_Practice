﻿// Input.js

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

function menuKeyEvent(e) {	// 메뉴창에서 스페이스바 누를시 재시작
	if(e.key===" "){
		manager.reStart();
	}
	if(e.key==="ArrowUp"){
		if(manager.difficulty<39){
			manager.difficulty++;
			manager.showMenu();
		}
	}
	if(e.key==="ArrowDown"){
		if(manager.difficulty>1){
			manager.difficulty--;
			manager.showMenu();
		}
	}
}

function clickEvent(e) {	// 클릭 이벤트
	var x = e.clientX;
	var y = e.clientY;
	console.log(x);
	console.log(y);
	if(x>71&&x<155&&y>252&&y<279){	// 재시작
		manager.reStart();
	}
	if(x>71&&x<370&&y>303&&y<331){	// 데미지 증가
		if(manager.attackDamage*10<=manager.gold){
			manager.gold -= manager.attackDamage*10;
			manager.attackDamage+=10;
			manager.showMenu();
			
		}
	}
	if(x>71&&x<359&&y>353&&y<381){	// 속도 증가
		if(manager.agility*5<=manager.gold){
			manager.gold -= manager.agility*5;
			manager.agility += 5;
			manager.arrowDelay = 60000 / manager.agility;
			manager.showMenu();
			
		}
	}
	if(x>352&&x<373&&y>405&&y<425){	// 난이도 상승
		if(manager.difficulty<39){
			manager.difficulty++;
			manager.showMenu();
			
		}
	}
	if(x>391&&x<411&&y>405&&y<425){	// 난이도 하락
		if(manager.difficulty>1){
			manager.difficulty--;
			manager.showMenu();
			
		}
	}
	if(x>552&&x<881&&y>302&&y<332){	// 멀티화살 증가
		if(manager.arrowMulti<4&&manager.arrowMulti*10000<=manager.gold){
			manager.gold -= manager.arrowMulti*10000;
			manager.arrowMulti++;
			manager.showMenu();
			
		}
	}
	
}

var updateInterval;	// 인터벌

// Img.js
function Img() {	// 이미지
	this.Stitch = new Image();
	this.Star = new Image();
	this.Snail = new Image();
	this.Slime = new Image();
	this.Resh = new Image();
	this.Harf = new Image();
	this.Threetale = new Image();
	this.DualBurk = new Image();
	this.Ghost = new Image();
	this.Dragon = new Image();
	this.Arrow = new Image();
	this.length = 0;
	this.init();
	this.addEvent();
};

Img.prototype.init = function() {	// 이미지 로드
	this.Stitch.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Stitch.jpg";
	this.length++;
	this.Star.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Star.png";
	this.length++;
	this.Snail.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Snail.png";
	this.length++;
	this.Slime.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Slime.png";
	this.length++;
	this.Resh.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Resh.PNG";
	this.length++;
	this.Harf.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Harf.PNG";
	this.length++;
	this.Threetale.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Threetale.PNG";
	this.length++;
	this.DualBurk.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/DualBurk.PNG";
	this.length++;
	this.Ghost.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Ghost.PNG";
	this.length++;
	this.Dragon.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Dragon.PNG";
	this.length++;
	this.Arrow.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Arrow.png";
	this.length++;
}

Img.prototype.addEvent = function() {	// 로드 이벤트 추가
	this. Stitch.addEventListener("load",imgOnLoad,false);
	this.Star.addEventListener("load",imgOnLoad,false);
	this.Snail.addEventListener("load",imgOnLoad,false);
	this.Slime.addEventListener("load",imgOnLoad,false);
	this.Resh.addEventListener("load",imgOnLoad,false);
	this.Harf.addEventListener("load",imgOnLoad,false);
	this.Threetale.addEventListener("load",imgOnLoad,false);
	this.DualBurk.addEventListener("load",imgOnLoad,false);
	this.Ghost.addEventListener("load",imgOnLoad,false);
	this.Dragon.addEventListener("load",imgOnLoad,false);
	this.Arrow.addEventListener("load",imgOnLoad,false);

}

function imgOnLoad() {	// 로드 이벤트 , 로드 완료시 매니저 실행
	imglength ++;
	if(imglength>=images.length){
		manager = new CanvasManager();	// 캔버스 매니저 선언
	}
}


// Canvas.js
function CanvasManager() {
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.difficulty = 1; // 난이도 1
	this.score = 0;	// 스코어 0
	this.gold = 0;	// 골드 0
	this.attackDamage = 40;	// 데미지 40
	this.agility = 60;	// 공격속도
	this.arrowDelay = 60000 / this.agility;	// 화살 딜레이
	this.arrowDeltaTime = 0;	// 화살 델타타임
	this.arrowTime = performance.now(); // 화살 시간
	this.arrowMulti = 1;	// 화살 멀티
	this.monster1 = "Snail";
	this.monster2 = "Slime";
	this.spawnDelay = 1000;	// 몬스터 딜레이
	this.spawnDeltaTime = 0;	// 몬스터 델타타임
	this.spawnTime = performance.now();	// 몬스터 시간
	this.character = new Character(20,20);
	this.arrow = [];
	this.monster = [];
	this.damage = [];
	this.init();
}

CanvasManager.prototype.init = function() {	// 캐릭터를 만들고 인터벌을 설정한다.
	var self = this;
	this.addKeyEvent();	// 키 이벤트 추가
	updateInterval = window.setInterval("manager.update()",1000/60);	// 업데이트 인터벌 실행

}

CanvasManager.prototype.update = function() {	// 업데이트
	var self = this;
	self.checkArrow();	// 화살 확인
	self.checkMonster();	// 몬스터 확인
	self.checkCollision();	// 충돌 확인
	self.checkDamage();	// 데미지 확인
	
	// 그리기
	self.canvasCtx.fillStyle = "rgba(255,255,255,1)";
	self.canvasCtx.fillRect(0,0,1000,500);
	self.character.draw();
	self.monster.forEach(function (instance){
		instance.draw();
	});
	self.arrow.forEach(function (instance){
		instance.draw();
	});
	self.damage.forEach(function (instance){
		instance.draw();
	});
	self.drawScore();
	
	// 종료
	if(input.quit) {
		self.quit();
	}
}

CanvasManager.prototype.addKeyEvent = function() {		// 키 이벤트 추가
	document.addEventListener("keydown",keyDownEvent,false);
	document.addEventListener("keyup",keyUpEvent,false);
}

CanvasManager.prototype.removeKeyDownEvent = function() {	// 키 이벤트 삭제
	document.removeEventListener("keydown",keyDownEvent);
	document.removeEventListener("keyup",keyUpEvent);
}

CanvasManager.prototype.addMenuEvent = function() {	// 메뉴에서 이벤트 추가
	document.addEventListener("click",clickEvent,false);
	document.addEventListener("keydown",menuKeyEvent,false);
}

CanvasManager.prototype.removeMenuEvent = function() {	// 메뉴에서 이벤트 삭제
	document.removeEventListener("click",clickEvent);
	document.removeEventListener("keydown",menuKeyEvent,false);
}

CanvasManager.prototype.checkArrow = function() {	// 시간이 지났다면 화살 생성
	var self = this;
	this.arrowDeltaTime = performance.now() - this.arrowTime;
	var randomX = self.character.x+self.character.width/2-10;
	var randomY = self.character.y+self.character.height/2-10;
	var vy = 0;
	var g = 0;
	if(Math.random()>0){
		vy = -6;
		g = 0.2;
	}
	var vx = 6;
	if(input.space&&this.arrowDelay<this.arrowDeltaTime){
		this.arrowTime = performance.now();
		switch(self.arrowMulti){
			case 1 :
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,self.attackDamage));
				break;
			case 2 :
				vy = -5.75;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,self.attackDamage));
				vy = -6.25;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,self.attackDamage));
				break;
			case 3 :
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,self.attackDamage));
				vy = -5.5;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,self.attackDamage));
				vy = -6.5;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,self.attackDamage));
				break;
			case 4 :
				vy = -5.75;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,self.attackDamage));
				vy = -6.25;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,self.attackDamage));
				vy = -5.25;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,self.attackDamage));
				vy = -6.75;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,self.attackDamage));
				break;
			default :
				break;
		}
	}
}

CanvasManager.prototype.checkMonster = function() {	// 시간이 지나면 몬스터 생성
	var self = this;
	this.spawnDeltaTime = performance.now() - this.spawnTime;
	var randomX = 1000
	var randomY = Math.floor(Math.random()*450);
	var randomName = Math.random()>0.7? self.monster2:self.monster1;
	if(this.spawnDelay<this.spawnDeltaTime){
		this.spawnTime = performance.now();
		this.monster.push(new Monster(randomX,randomY,randomName));
	}
}

CanvasManager.prototype.checkCollision = function() {	// 몬스터와 캐릭터 충돌 확인
	var self = this;
	var target = self.character
	var n = 0;
	self.monster.forEach(function (obstacle) {
		var condition1 = target.x+target.width>obstacle.x && target.x<obstacle.x && target.y+target.height>obstacle.y && target.y<obstacle.y;
		var condition2 = target.x<obstacle.x+obstacle.width && target.x+target.width>obstacle.x+obstacle.width && target.y+target.height>obstacle.y && target.y< obstacle.y;
		var condition3 = target.x+target.width>obstacle.x && target.x < obstacle.x && target.y < obstacle.y + obstacle.height && target.y+target.height > obstacle.y+obstacle.height;
		var condition4 = target.x<obstacle.x+obstacle.width && target.x+target.width > obstacle.x + obstacle.width && target.y < obstacle.y + obstacle.height && target.y + target.height > obstacle.y + obstacle.height;
		if(condition1 || condition2 || condition3 || condition4){	// 충돌시
			input.quit = true;
		}
		obstacle.checkCollision(self.arrow);	// 몬스터와 화살 충돌 확인
		self.monsterHpCheck(n);	// 몬스터 사망 확인
		n++;
	});
}

CanvasManager.prototype.checkDamage = function() {	// 데미지가 0.4초후 사라짐
	var self = this;
	var n = 0;
	self.damage.forEach(function (instance) {
		if(instance.time+400<performance.now()) self.damage.splice(n,1);
	})
}

CanvasManager.prototype.monsterHpCheck = function(n) {	// 몬스터 사망 확인
	var self = this;
	if(self.monster[n].hp<=0){
		self.score += Math.floor(self.monster[n].maxHp/2);
		self.monster.splice(n,1);
	} 
}

CanvasManager.prototype.drawScore = function() {	// 점수 출력
	var self = this;
	this.canvasCtx.font = "16px Arial";
	this.canvasCtx.fillStyle = "#0095DD";
	this.canvasCtx.fillText("Score: " + self.score,8,20);

}

CanvasManager.prototype.quit = function() {	// quit 눌렷을시
	var self = this;
	inputReset();
	window.clearInterval(updateInterval); 	// 인터벌 제거
	self.removeKeyDownEvent();
	self.addMenuEvent();	// 메뉴 이벤트로 대체
	self.gold += self.score;
	self.score = 0;
	self.showMenu();
}

CanvasManager.prototype.showMenu = function() {	// 메뉴 출력
	var self = this;
	this.canvasCtx.fillStyle = "rgba(255,255,255,1)";
	this.canvasCtx.fillRect(0,0,1000,500);
	this.canvasCtx.font = "30px Arial";
	this.canvasCtx.fillStyle = "#008899";
	this.canvasCtx.fillText("메뉴",20,40);
	this.canvasCtx.fillStyle = "#880099";
	this.canvasCtx.fillText("Gold: " + self.gold,20,90);
	this.canvasCtx.fillStyle = "#998800";
	this.canvasCtx.fillText("재시작",20,140);
	this.canvasCtx.fillStyle = "#666666";
	this.canvasCtx.fillText("공격력: " + self.attackDamage + " (cost: " + self.attackDamage*10 + ")",20,190);
	this.canvasCtx.fillStyle = "#fe12e3";
	this.canvasCtx.fillText("공속: " + self.agility + " (cost: " + self.agility*5 + ")",20,240);
	this.canvasCtx.fillStyle = "#12fee3";
	this.canvasCtx.fillText("난이도: " + self.difficulty ,20,290);
	this.canvasCtx.fillText("▲ ▼",300,290);
	this.canvasCtx.fillStyle = "#fee312";
	this.canvasCtx.fillText("멀티화살: " + self.arrowMulti + " (cost: " + self.arrowMulti*10000 + ")",500,190);
}

CanvasManager.prototype.reStart = function(){	// 재시작
	var self = this;
	self.score = 0;
	self.character.x = 20;
	self.character.y = 20;
	self.monster = [];
	self.arrow = [];
	self.monster1 = "Snail";
	self.monster2 = "Slime";
	self.spawnDelay = 1000 - (self.difficulty%10)*50;
	if(self.difficulty>=10){
		self.monster1 = "Resh";
		self.monster2 = "Harf";
		self.spawnDelay = 1000 - ((self.difficulty-10)%10)*50;
	}
	if(self.difficulty>=20){
		self.monster1 = "Threetale";
		self.monster2 = "DualBurk";
		self.spawnDelay = 1000 - ((self.difficulty-20)%10)*50;
	}
	if(self.difficulty>=30){
		self.monster1 = "Ghost";
		self.monster2 = "Dragon";
		self.spawnDelay = 1000 - ((self.difficulty-30)%10)*50;
	}
	
	updateInterval = window.setInterval("manager.update()",1000/60);
	self.removeMenuEvent();
	self.addKeyEvent();
}




// Character.js
function Character(x,y) {	// 캐릭터
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.width = 80;
	this.height = 96;
	this.img = images.Stitch;
	this.speed = 4;
}

Character.prototype.draw = function() {	// 객체 그리기
	var self = this;
	if(input.up&&this.y>=10+this.speed) this.y-=this.speed;
	if(input.down&&this.y<=500-this.height-10-this.speed) this.y+=this.speed;
	if(input.right&&this.x<=1000-this.width-10-this.speed) this.x+=this.speed;
	if(input.left&&this.x>=10+this.speed) this.x-=this.speed;
	self.canvasCtx.drawImage(self.img,self.x,self.y,self.width,self.height);
}








// Arrow.js

function Arrow(x,y,vx,vy,g,attackDamage) {	// 화살
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.attackDamage = attackDamage;
	this.g = g;
	this.width = 82;
	this.height = 11;
	this.img = images.Arrow;
}

Arrow.prototype.draw = function() {	// 화살 그리기
	var self = this;
	self.vy += self.g;
	self.x += self.vx;
	self.y += self.vy;
	var angle = Math.atan(self.vy/self.vx);
	self.canvasCtx.save();
	self.canvasCtx.translate(self.x+self.width/2,self.y+self.height/2);			//이미지의 생성점과 회전 기준점을 설정
	self.canvasCtx.rotate(angle);	//기준점을 기준으로 회전
	self.canvasCtx.translate(-self.x-self.width/2,-self.y-self.height/2);			//원점으로 생성점과 기준점을 바꾼다.
	self.canvasCtx.drawImage(self.img,self.x,self.y,self.width,self.height);		//기준점이 0,0이기 때문에 0,0으로 생성됨
	self.canvasCtx.restore();				//컨텍스트 반환
}

// Monster.js

function Monster(x,y,name) {	// 몬스터
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.vx = -2.5;
	this.name = name;
	this.init();
}

Monster.prototype.init = function() {	// 초기화
	switch(this.name) {
		case "Slime" :
			this.width = 69;
			this.height = 47;
			this.maxHp = 100;
			this.vx = -2.5;
			this.img = images.Slime;
			break;
		case "Snail" :
			this.width = 42;
			this.height = 33;
			this.maxHp = 30;
			this.vx = -3;
			this.img = images.Snail;
			break;
		case "Resh" :
			this.width = 65;
			this.height = 56;
			this.maxHp = 200;
			this.vx = -2.5;
			this.img = images.Resh;
			break;
		case "Harf" :
			this.width = 73;
			this.height = 96;
			this.maxHp = 300;
			this.vx = -3;
			this.img = images.Harf;
			break;
		case "Threetale" :
			this.width = 95;
			this.height = 75;
			this.maxHp = 500;
			this.img = images.Threetale;
			this.vx = -3;
			break;
		case "DualBurk" :
			this.width = 93;
			this.height = 70;
			this.maxHp = 600;
			this.vx = -2.5;
			this.img = images.DualBurk;
			break;
		case "Ghost" :
			this.width = 67;
			this.height = 92;
			this.maxHp = 1000;
			this.vx = -2.2;
			this.img = images.Ghost;
			break;
		case "Dragon" :
			this.width = 77;
			this.height = 54;
			this.maxHp = 1200;
			this.vx = -1.5;
			this.img = images.Dragon;
			break;
		default :
			this.width = 67;
			this.height = 92;
			this.maxHp = 30;
			this.vx = -3;
			this.name = "Snail";
			this.img = Images.Snail;
	}
	this.hp = this.maxHp;
}

Monster.prototype.checkCollision = function() {	// 몬스터와 화살 충돌 이벤트
	var self = this;
	var n =0;
	manager.arrow.forEach(function (instance) {
		var condition1 = self.x+self.width>instance.x && self.x<instance.x && self.y+self.height>instance.y && self.y<instance.y;
		var condition2 = self.x<instance.x+instance.width && self.x+self.width>instance.x+instance.width && self.y+self.height>instance.y && self.y< instance.y;
		var condition3 = self.x+self.width>instance.x && self.x < instance.x && self.y < instance.y + instance.height && self.y+self.height > instance.y+instance.height;
		var condition4 = self.x<instance.x+instance.width && self.x+self.width > instance.x + instance.width && self.y < instance.y + instance.height && self.y + self.height > instance.y + instance.height;
		if(condition1 || condition2 || condition3 || condition4){
			self.hp-= instance.attackDamage;
			manager.damage.push(new Damage(self.x+self.width/2,self.y,instance.attackDamage));
			manager.arrow.splice(n,1);

		}
		n++;
	});

}

Monster.prototype.draw = function() {	// 몬스터 그리기
	var self = this;
	self.x += self.vx 
	self.canvasCtx.drawImage(self.img,self.x,self.y,self.width,self.height);
}

// Damage.js
function Damage(x,y,value) {
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.time = performance.now();
	this.value = value;
}

Damage.prototype.draw = function() {
	var self = this;
	this.canvasCtx.font = "16px Arial";
	this.canvasCtx.fillStyle = "#0095DD";
	this.canvasCtx.fillText(self.value,self.x,self.y);
}


// Application.js
var manager;
var imglength=0;
var images;
document.addEventListener("DOMContentLoaded",function() {	// 로드시 이벤트
	images = new Img();
});

