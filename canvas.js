// Input.js

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
		if(manager.difficulty<manager.maxDifficulty){
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
		if(manager.difficulty<manager.maxDifficulty){
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
	if(x>552&&x<881&&y>353&&y<381){	// 크리티컬 확률 증가
		if(manager.critical<0.5&&manager.critical*10000<=manager.gold){
			manager.gold -= manager.critical*10000;
			manager.critical+=0.05;
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
	this.maxDifficulty = 1;	// 최대난이도
	this.score = 0;	// 스코어 0
	this.gold = 0;	// 골드 0
	this.attackDamage = 40;	// 데미지 40
	this.agility = 60;	// 공격속도
	this.critical = 0.1;	// 크리율
	this.criticalDamage = 2;	// 크리 배율
	this.arrowDelay = 60000 / this.agility;	// 화살 딜레이
	this.arrowDeltaTime = 0;	// 화살 델타타임
	this.arrowTime = performance.now(); // 화살 시간
	this.arrowMulti = 1;	// 화살 멀티
	this.waveDelay = 6000;	// 웨이브 딜레이
	this.waveDeltaTime = 0;	// 웨이브 델타타임
	this.waveTime = performance.now()-3000;	// 웨이브 시간
	this.waveStartTime = performance.now();
	this.waveEndTime = 36000;
	this.monster1 = "Snail";
	this.monster2 = "Slime";
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
	self.monsterWave();	// 몬스터 웨이브 확인
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
	self.checkWin();	// 웨이브 종료 확인
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
	var attackDamage = self.attackDamage
	var isCritical = false;
	if(Math.random()<self.critical){
		attackDamage *= self.criticalDamage;
		isCritical = true;
	}
	if(Math.random()>0){
		vy = -6;
		g = 0.2;
	}
	var vx = 6;
	if(input.space&&this.arrowDelay<this.arrowDeltaTime){
		this.arrowTime = performance.now();
		switch(self.arrowMulti){
			case 1 :
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				break;
			case 2 :
				vy = -5.75;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				vy = -6.25;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				break;
			case 3 :
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				vy = -5.5;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				vy = -6.5;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				break;
			case 4 :
				vy = -5.75;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				vy = -6.25;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				vy = -5.25;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				vy = -6.75;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				break;
			default :
				break;
		}
	}
}

CanvasManager.prototype.monsterWave = function() {	// 몬스터 웨이브
	var self = this;
	var wavelevel = 0;
	var templevel = 0;
	this.waveDeltaTime = performance.now() - this.waveTime;
	switch(Math.floor(self.difficulty/5)) {
		case 0 :
			wavelevel = Math.random()<1? 0:1;
			self.waveDelay = 6000;
			break;
		case 1 :
			wavelevel = Math.random()<0.7? 0:1;
			self.waveDelay = 5800;
			break;
		case 2 :
			templevel = Math.random()<0.95? 1:2;
			wavelevel = Math.random()<0.6? 0:templevel;
			self.waveDelay = 5600;
			break;
		case 3 :
			templevel = Math.random()<0.8? 1:2;
			wavelevel = Math.random()<0.4? 0:templevel;
			self.waveDelay = 5600;
			break;
		case 4 :
			templevel = Math.random()<0.5? 1:2;
			wavelevel = Math.random()<0.2? 0:templevel;
			self.waveDelay = 5400;
			break;
		case 5 :
			wavelevel = Math.random()<0.5? 1:2;
			self.waveDelay = 5400;
			break;
		case 6 :
			templevel = Math.random()<0.9? 2:3;
			wavelevel = Math.random()<0.4? 1:templevel;
			self.waveDelay = 5000;
			break;
		case 7 :
			templevel = Math.random()<0.75? 2:3;
			wavelevel = Math.random()<0.3? 1:templevel;
			self.waveDelay = 5000;
			break;
		case 8 :
			templevel = Math.random()<0.5? 2:3;
			wavelevel = Math.random()<0.2? 1:templevel;
			self.waveDelay = 4800;
			break;
		case 9 :
			wavelevel = Math.random()<0.5? 2:3;
			self.waveDelay = 4800;
			break;
		case 10 :
			templevel = Math.random()<0.75? 3:4;
			wavelevel = Math.random()<0.3? 1:templevel;
			self.waveDelay = 4800;
			break;
		default :
			break;
	}
	

	if(this.waveDelay<this.waveDeltaTime){
		this.waveTime = performance.now();
		switch(wavelevel){
			case 0 :	// 0 단계 : 4마리 순차적 생성	>> 총 4
				for(var i = 0; i<4;i++){
	 				self.spawnMonster(1000+i*150,Math.random()*420);
				}
				break;
			case 1 :	// 1 단계 : 3마리 + 1열로 4~6마리 + 랜덤 2마리 >> 총 9~11
				self.spawnMonster(1000,Math.random()*420);
				self.spawnMonster(1300,Math.random()*420);
				self.spawnMonster(1450,Math.random()*420);
				var ran = Math.floor(4+Math.random()*2)
				for(var i =0; i<ran;i++){
					self.spawnMonster(1150,30+Math.random()*60+i*60);
				}
				for(var i=0;i<2;i++){ 	//랜덤으로 2마리 생성
					self.spawnMonster(1000+Math.random()*450,Math.random()*420);
				}

				break;
			case 2 :	// 2 단계 : 1마리 + 8*2마리 + 랜덤 7마리 >> 총 22
				self.spawnMonster(1000,Math.random()*420);
				for(var i=0;i<8;i++){
					for(var j=0;j<2;j++){
						self.spawnMonster(1150+i*150,60+j*60);
					}
				}
				for(var i=0;i<7;i++){ 	//랜덤으로 7마리 생성
					self.spawnMonster(1000+Math.random()*420,Math.random()*420);
				}
				break;
			case 3 :	// 3 단계 : 5*6마리 + 랜덤 10마리 >> 총 40
				for(var i=0;i<5;i++){
					for(var j=0;j<6;j++){
						self.spawnMonster(1000+i*150,60+j*60);
					}
				}
				for(var i=0;i<10;i++){ 	//랜덤으로 10마리 생성
					self.spawnMonster(1000+Math.random()*450,Math.random()*420);
				}
				break;
			case 4 :	// 4 단계 : 10 * 7마리 + 랜덤 15마리 >> 총 85
				for(var i=0;i<10;i++){
					for(var j=0;j<7;j++){
						self.spawnMonster(1000+i*150,30+j*60);
					}
				}
				for(var i=0;i<15;i++){ 	//랜덤으로 15마리 생성
					self.spawnMonster(1000+Math.random()*450,Math.random()*420);
				}
				break;
		}
	}

}

CanvasManager.prototype.spawnMonster = function(x,y) {	// 몬스터 생성
	var self = this;
	var randomX = x
	var randomY = y
	var randomName = Math.random()>0.7? self.monster2:self.monster1;
	this.monster.push(new Monster(randomX,randomY,randomName));
		
	
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
		var condition5 = obstacle.x <= 0;
		if(condition1 || condition2 || condition3 || condition4 || condition5){	// 충돌 또는 몬스터 도착시
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

CanvasManager.prototype.checkWin = function() {	// 승리 확인
	var self = this;
	if(performance.now()-self.waveStartTime>self.waveEndTime) {
		self.gold += self.score;	// 추가 골드
		if(self.difficulty===self.maxDifficulty) {
			self.maxDifficulty++;
		}
		input.quit = true;
	}
	this.canvasCtx.font = "16px Arial";
	this.canvasCtx.fillStyle = "#0095dd";
	this.canvasCtx.fillText("Progress: " + Math.floor((performance.now()-self.waveStartTime)/self.waveEndTime*100)+"%",850,20);
}

CanvasManager.prototype.monsterHpCheck = function(n) {	// 몬스터 사망 확인
	var self = this;
	if(self.monster[n].hp<=0){
		self.score += self.monster[n].point;
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
	this.canvasCtx.fillStyle = "#bea312";
	this.canvasCtx.fillText("멀티화살: " + self.arrowMulti + " (cost: " + self.arrowMulti*10000 + ")",500,190);
	this.canvasCtx.fillStyle = "#5555ee";
	this.canvasCtx.fillText("크리티컬확률: " + Math.floor(self.critical*100) + "% (cost: " + Math.floor(self.critical*100*100) + ")",500,240);

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
	if(self.difficulty>=10){
		self.monster1 = "Resh";
		self.monster2 = "Harf";
	}
	if(self.difficulty>=20){
		self.monster1 = "Threetale";
		self.monster2 = "DualBurk";
	}
	if(self.difficulty>=30){
		self.monster1 = "Ghost";
		self.monster2 = "Dragon";
	}
	
	updateInterval = window.setInterval("manager.update()",1000/60);
	self.waveStartTime = performance.now();
	self.waveTime = performance.now()-3000;
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

function Arrow(x,y,vx,vy,g,attackDamage,isCritical) {	// 화살
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.attackDamage = attackDamage;
	this.isCritical = isCritical;
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
	this.point = 10;
	this.init();
}

Monster.prototype.init = function() {	// 초기화
	switch(this.name) {
		case "Slime" :
			this.width = 69;
			this.height = 47;
			this.hp = 100;
			this.point = 30;
			this.vx = -2.5;
			this.img = images.Slime;
			break;
		case "Snail" :
			this.width = 37;
			this.height = 26;
			this.hp = 30;
			this.point = 10;
			this.vx = -3;
			this.img = images.Snail;
			break;
		case "Resh" :
			this.width = 64;
			this.height = 54;
			this.hp = 200;
			this.point = 60;
			this.vx = -2.5;
			this.img = images.Resh;
			break;
		case "Harf" :
			this.width = 68;
			this.height = 96;
			this.hp = 300;
			this.point = 85;
			this.vx = -3;
			this.img = images.Harf;
			break;
		case "Threetale" :
			this.width = 95;
			this.height = 75;
			this.hp = 1000;
			this.point = 120;
			this.img = images.Threetale;
			this.vx = -3;
			break;
		case "DualBurk" :
			this.width = 92;
			this.height = 70;
			this.hp = 2500;
			this.point = 200;
			this.vx = -2.5;
			this.img = images.DualBurk;
			break;
		case "Ghost" :
			this.width = 63;
			this.height = 91;
			this.hp = 8000;
			this.point = 300;
			this.vx = -2.2;
			this.img = images.Ghost;
			break;
		case "Dragon" :
			this.width = 76;
			this.height = 53;
			this.hp = 12000;
			this.point = 460;
			this.vx = -1.5;
			this.img = images.Dragon;
			break;
		default :
			this.width = 67;
			this.height = 92;
			this.hp = 30;
			this.point = 15;
			this.vx = -3;
			this.name = "Snail";
			this.img = Images.Snail;
	}

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
			manager.damage.push(new Damage(self.x+self.width/2,self.y,instance.attackDamage,instance.isCritical));
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
function Damage(x,y,value,isCritical) {
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.time = performance.now();
	this.value = value;
	this.isCritical = isCritical;
}

Damage.prototype.draw = function() {
	var self = this;
	this.canvasCtx.font = "16px Arial";
	this.canvasCtx.fillStyle = "#0095DD";
	if(self.isCritical) {
		this.canvasCtx.font = "20px Arial";
		this.canvasCtx.fillStyle = "#ee00DD";
	}
	this.canvasCtx.fillText(self.value,self.x,self.y);
}


// Application.js
var manager;
var imglength=0;
var images;
document.addEventListener("DOMContentLoaded",function() {	// 로드시 이벤트
	images = new Img();
});

