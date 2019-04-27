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

function ResultKeyEvent() {	// 결과 이벤트
	manager.removeResultEvent();
	manager.addMenuEvent();
	manager.showMenu();
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
	if(e.key==="ArrowLeft"){
		if(manager.themeNum>1){
			manager.themeNum--;
			manager.setTheme();
			manager.showMenu();
			
		}
	}
	if(e.key==="ArrowRight"){
		if(manager.themeNum<6){
			manager.themeNum++;
			manager.setTheme();
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
			manager.attackDamage+=5;
			manager.showMenu();
			
		}
	}
	if(x>71&&x<359&&y>353&&y<381){	// 속도 증가
		if(manager.agility*5<=manager.gold){
			manager.gold -= manager.agility*5;
			manager.agility += 4;
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
	if(x>352&&x<373&&y>455&&y<477){	// 테마 좌로
		if(manager.themeNum>1){
			manager.themeNum--;
			manager.setTheme();
			manager.showMenu();
			
		}
	}
	if(x>391&&x<411&&y>455&&y<477){	// 테마 우로
		if(manager.themeNum<6){
			manager.themeNum++;
			manager.setTheme();
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
			manager.critical+=0.02;
			manager.showMenu();
			
		}
	}
	if(x>552&&x<881&&y>402&&y<432){	// 크리티컬 배율 증가
		if(manager.criticalDamage<10&&manager.criticalDamage*5000<=manager.gold){
			manager.gold -= manager.criticalDamage*5000;
			manager.criticalDamage+=0.5;
			manager.showMenu();
			
		}
	}
	if(x>552&&x<881&&y>452&&y<482){	// 넉백률 증가
		if(manager.knockBack<10&&(manager.knockBack+1)*1000<=manager.gold){
			manager.gold -= (manager.knockBack+1)*1000;
			manager.knockBack+=1;
			manager.showMenu();
			
		}
	}

	
}

var updateInterval;	// 인터벌

// Img.js
function Img() {	// 이미지
	this.Background1 = new Image();
	this.Background2 = new Image();
	this.Background3 = new Image();
	this.Background4 = new Image();
	this.Background5 = new Image();
	this.Background6 = new Image();
	this.Helena = new Image();
	this.Star = new Image();
	this.Wind = new Image();
	this.Snail = new Image();
	this.BlueSnail = new Image();
	this.RedSnail = new Image();
	this.OrangeMushroom = new Image();
	this.GreenMushroom = new Image();
	this.BlueMushroom = new Image();
	this.Steezy = new Image();
	this.Slime = new Image();
	this.Resh = new Image();
	this.Harf = new Image();
	this.Threetale = new Image();
	this.DualBurk = new Image();
	this.Ghost = new Image();
	this.Dragon = new Image();
	this.Arrow = new Image();
	this.ArrowCritical = new Image();
	this.length = 0;
	this.init();
	this.addEvent();
};

Img.prototype.init = function() {	// 이미지 로드
	this.Background1.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Background1.png";
	this.length++;
	this.Background2.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Background2.png";
	this.length++;
	this.Background3.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Background3.png";
	this.length++;
	this.Background4.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Background4.png";
	this.length++;
	this.Background5.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Background5.png";
	this.length++;
	this.Background6.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Background6.png";
	this.length++;
	this.Helena.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Helena.png";
	this.length++;
	this.Star.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Star.png";
	this.length++;
	this.Wind.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Wind.PNG";
	this.length++;
	this.Snail.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Snail.png";
	this.length++;
	this.BlueSnail.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/BlueSnail.png";
	this.length++;
	this.RedSnail.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/RedSnail.png";
	this.length++;
	this.OrangeMushroom.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/OrangeMushroom.png";
	this.length++;
	this.GreenMushroom.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/GreenMushroom.png";
	this.length++;
	this.BlueMushroom.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/BlueMushroom.png";
	this.length++;
	this.Steezy.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/Steezy.png";
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
	this.ArrowCritical.src="https://raw.githubusercontent.com/SeoHyeonMyeong/JavaScript_Canvas_Practice/master/images/ArrowCritical.png";
	this.length++;
}

Img.prototype.addEvent = function() {	// 로드 이벤트 추가
	this.Background1.addEventListener("load",imgOnLoad,false);
	this.Background2.addEventListener("load",imgOnLoad,false);
	this.Background3.addEventListener("load",imgOnLoad,false);
	this.Background4.addEventListener("load",imgOnLoad,false);
	this.Background5.addEventListener("load",imgOnLoad,false);
	this.Background6.addEventListener("load",imgOnLoad,false);
	this.Helena.addEventListener("load",imgOnLoad,false);
	this.Star.addEventListener("load",imgOnLoad,false);
	this.Wind.addEventListener("load",imgOnLoad,false);
	this.Snail.addEventListener("load",imgOnLoad,false);
	this.BlueSnail.addEventListener("load",imgOnLoad,false);
	this.RedSnail.addEventListener("load",imgOnLoad,false);
	this.OrangeMushroom.addEventListener("load",imgOnLoad,false);
	this.GreenMushroom.addEventListener("load",imgOnLoad,false);
	this.BlueMushroom.addEventListener("load",imgOnLoad,false);
	this.Steezy.addEventListener("load",imgOnLoad,false);
	this.Slime.addEventListener("load",imgOnLoad,false);
	this.Resh.addEventListener("load",imgOnLoad,false);
	this.Harf.addEventListener("load",imgOnLoad,false);
	this.Threetale.addEventListener("load",imgOnLoad,false);
	this.DualBurk.addEventListener("load",imgOnLoad,false);
	this.Ghost.addEventListener("load",imgOnLoad,false);
	this.Dragon.addEventListener("load",imgOnLoad,false);
	this.Arrow.addEventListener("load",imgOnLoad,false);
	this.ArrowCritical.addEventListener("load",imgOnLoad,false);

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
	this.themeNum = 1;
	this.theme = "달팽이 농장";
	this.ifWin = false; // 승리여부
	this.maxDifficulty = 40;	// 최대난이도
	this.score = 0;	// 스코어 
	this.gold = 500;	// 골드 
	this.attackDamage = 30;	// 데미지 30
	this.agility = 80;	// 공격속도
	this.critical = 0.1;	// 크리율
	this.criticalDamage = 2;	// 크리 배율
	this.knockBack = 0;			// 넉백
	this.arrowDelay = 60000 / this.agility;	// 화살 딜레이
	this.arrowDeltaTime = 0;	// 화살 델타타임
	this.arrowTime = performance.now(); // 화살 시간
	this.arrowMulti = 1;	// 화살 멀티
	this.waveDelay = 6000;	// 웨이브 딜레이
	this.waveDeltaTime = 0;	// 웨이브 델타타임
	this.waveTime = performance.now()-3000;	// 웨이브 시간
	this.waveStartTime = performance.now();
	this.waveEndTime = 30000;
	this.monster1 = "Snail";
	this.monster2 = "BlueSnail";
	this.monster3 = "RedSnail";
	this.character = new Character(20,20);
	this.arrow = [];
	this.monster = [];
	this.damage = [];
	this.EnemyAttack = [];
	this.init();
}

CanvasManager.prototype.init = function() {	// 캐릭터를 만들고 인터벌을 설정한다.
	var self = this;
	this.addKeyEvent();	// 키 이벤트 추가
	this.setBackgroundImage();
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
	self.canvasCtx.drawImage(self.backgroundImg,0,0,1000,500);
	self.canvasCtx.fillStyle = "rgba(255,255,255,0.5)";
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
	self.EnemyAttack.forEach(function (instance){
		instance.draw();
	});
	self.drawScore();
	self.checkWin();	// 웨이브 종료 확인
	// 종료
	if(input.quit) {
		self.quit();
	}
}

CanvasManager.prototype.setBackgroundImage = function() {	// 배경 이미지 세팅
	var self = this;
	switch(self.themeNum) {
		case 1 :
			self.backgroundImg = images.Background1;
			break;
		case 2 :
			self.backgroundImg = images.Background2;
			break;
		case 3 :
			self.backgroundImg = images.Background3;
			break;
		case 4 :
			self.backgroundImg = images.Background4;
			break;
		case 5 :
			self.backgroundImg = images.Background5;
			break;
		case 6 :
			self.backgroundImg = images.Background6;
			break;
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

CanvasManager.prototype.addResultEvent = function() {	// 결과 이벤트 추가
	document.addEventListener("keydown",ResultKeyEvent);
}

CanvasManager.prototype.removeResultEvent = function() {	// 결과 이벤트 삭제
	document.removeEventListener("keydown",ResultKeyEvent);
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
		vy = -8;
		g = 0.3;
	}
	var vx = 8.5;
	if(input.space&&this.arrowDelay<this.arrowDeltaTime){
		this.arrowTime = performance.now();
		switch(self.arrowMulti){
			case 1 :
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				break;
			case 2 :
				vy = -7.5;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				vy = -8.5;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				break;
			case 3 :
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				vy = -7;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				vy = -9;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				break;
			case 4 :
				vy = -7.5;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				vy = -8.5;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				vy = -6.5;
				this.arrow.push(new Arrow(randomX,randomY,vx,vy,g,attackDamage,isCritical));
				vy = -9.5;
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
			break;
		case 1 :
			wavelevel = Math.random()<0.7? 0:1;
			break;
		case 2 :
			templevel = Math.random()<0.95? 1:2;
			wavelevel = Math.random()<0.6? 0:templevel;
			break;
		case 3 :
			templevel = Math.random()<0.8? 1:2;
			wavelevel = Math.random()<0.4? 0:templevel;
			break;
		case 4 :
			templevel = Math.random()<0.5? 1:2;
			wavelevel = Math.random()<0.2? 0:templevel;
			break;
		case 5 :
			wavelevel = Math.random()<0.5? 1:2;
			break;
		case 6 :
			templevel = Math.random()<0.9? 2:3;
			wavelevel = Math.random()<0.4? 1:templevel;
			break;
		case 7 :
			templevel = Math.random()<0.75? 2:3;
			wavelevel = Math.random()<0.3? 1:templevel;
			break;
		case 8 :
			templevel = Math.random()<0.5? 2:3;
			wavelevel = Math.random()<0.2? 1:templevel;
			break;
		case 9 :
			wavelevel = Math.random()<0.5? 2:3;
			break;
		case 10 :
			templevel = Math.random()<0.75? 3:4;
			wavelevel = Math.random()<0.3? 2:templevel;
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
						self.spawnMonster(1150+i*150,190+j*80);
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
	var temp = Math.random()<0.6? self.monster2:self.monster3;
	var randomName = Math.random()<0.6? self.monster1:temp;
	this.monster.push(new Monster(randomX,randomY,randomName));
}

CanvasManager.prototype.checkCollision = function() {	
	var self = this;
	var target = self.character
	var n = 0;
	self.monster.forEach(function (instance) {	// 몬스터와 캐릭터 충돌 확인
		var condition1 = instance.x < target.x + target.width && instance.x + instance.width > target.x;
        var condition2 = instance.y < target.y + target.height && instance.y + instance.height > target.y;
		var condition3 = instance.x <= 0;
		if(condition1 && condition2 || condition3){	// 충돌 또는 몬스터 도착시
			input.quit = true;
		}
		instance.checkCollision(self.arrow);	// 몬스터와 화살 충돌 확인
		self.monsterHpCheck(n);	// 몬스터 사망 확인
		n++;
	});
	
	self.EnemyAttack.forEach(function(instance){	// 적 공격과 캐릭터 충돌 확인
		var condition1 = instance.x < target.x + target.width && instance.x + instance.width > target.x;
        var condition2 = instance.y < target.y + target.height && instance.y + instance.height > target.y;
        if(condition1 && condition2){	// 충돌 시
			input.quit = true;
		}
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
		self.ifWin = true;
		input.quit = true;
	}
	this.canvasCtx.font = "16px Arial";
	this.canvasCtx.fillStyle = "#0000cc";
	this.canvasCtx.fillText("Progress: " + Math.floor((performance.now()-self.waveStartTime)/self.waveEndTime*100)+"%",850,20);
}

CanvasManager.prototype.monsterHpCheck = function(n) {	// 몬스터 사망 확인
	var self = this;
	if(self.monster[n].isBoss&&self.monster[n].hp<=0){	// 보스가 사망시
		self.ifWin = true;
		input.quit = true;
		self.score += self.monster[n].point;
		self.monster.splice(n,1);
	}
	else if(self.monster[n].hp<=0){
		self.score += self.monster[n].point;
		self.monster.splice(n,1);
	} 
}

CanvasManager.prototype.drawScore = function() {	// 점수 출력
	var self = this;
	this.canvasCtx.font = "16px Arial";
	this.canvasCtx.fillStyle = "#0000cc";
	this.canvasCtx.fillText("Score: " + self.score,8,20);

}

CanvasManager.prototype.quit = function() {	// quit 눌렷을시
	var self = this;
	inputReset();
	window.clearInterval(updateInterval); 	// 인터벌 제거
	self.removeKeyDownEvent();
	window.setTimeout("manager.addResultEvent()",1000);	// 결과 이벤트로 대체
	self.showResult();
}

CanvasManager.prototype.showResult = function() {	// 결과출력
	var self = this;
	this.canvasCtx.fillStyle = "rgba(255,255,255,1)";
	this.canvasCtx.fillRect(0,0,1000,500);
	this.canvasCtx.font = "30px Arial";
	this.canvasCtx.fillStyle = "#008899";
	this.canvasCtx.fillText("결과",20,40);
	if(self.ifWin){
		self.canvasCtx.fillStyle = "#00cc00";
		self.canvasCtx.fillText(self.theme + "(" + self.difficulty + ")" + " 승리",20,90);
		self.gold += self.score*2;
		this.canvasCtx.fillStyle = "#0000cc";
		this.canvasCtx.fillText("점수: " + self.score,20,140);
		this.canvasCtx.fillText("골드: " + self.gold + "(+" + self.score*2 + ")",20,190);
	}
	else {
		self.canvasCtx.fillStyle = "#666666";
		self.canvasCtx.fillText(self.theme + "(" + self.difficulty + ")" + " 패배",20,90);
		self.gold += self.score;
		this.canvasCtx.fillStyle = "#0000cc";
		this.canvasCtx.fillText("점수: " + self.score,20,140);
		this.canvasCtx.fillText("골드: " + self.gold + "(+" + self.score + ")",20,190);
	}
	self.ifWin = false;
	self.score = 0;
	self.canvasCtx.fillStyle = "#ff66cc";
	self.canvasCtx.fillText("아무키나 눌러 주세요.",360,400);
	
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
	this.canvasCtx.fillStyle = "#990000";
	this.canvasCtx.fillText("공격력: " + self.attackDamage + " (cost: " + self.attackDamage*10 + ")",20,190);
	this.canvasCtx.fillStyle = "#fe12e3";
	this.canvasCtx.fillText("공속: " + self.agility + " (cost: " + self.agility*5 + ")",20,240);
	this.canvasCtx.fillStyle = "#0033ff";
	this.canvasCtx.fillText("난이도: " + self.difficulty ,20,290);
	this.canvasCtx.fillText("▲ ▼",300,290);
	this.canvasCtx.fillStyle = "#555555";
	this.canvasCtx.fillText("지역: " + self.theme , 20,340);
	this.canvasCtx.fillText("◀ ▶",300,340);
	this.canvasCtx.fillStyle = "#bea312";
	this.canvasCtx.fillText("멀티화살: " + self.arrowMulti + " (cost: " + self.arrowMulti*10000 + ")",500,190);
	this.canvasCtx.fillStyle = "#5555ee";
	this.canvasCtx.fillText("크리티컬확률: " + Math.floor(self.critical*100) + "% (cost: " + Math.floor(self.critical*100*100) + ")",500,240);
	this.canvasCtx.fillStyle = "#5555ee";
	this.canvasCtx.fillText("크리티컬배율: " + self.criticalDamage + " (cost: " + self.criticalDamage*5000 + ")",500,290);
	this.canvasCtx.fillStyle = "#5555ee";
	this.canvasCtx.fillText("넉백: " + self.knockBack + " (cost: " + (self.knockBack+1)*1000 +")",500,340);
}

CanvasManager.prototype.reStart = function(){	// 재시작
	var self = this;
	self.score = 0;
	self.character.x = 20;
	self.character.y = 20;
	self.monster = [];
	self.arrow = [];
	self.EnemyAttack = [];
	self.waveEndTime = 30000;
	switch(self.themeNum){
			case 1 :
			self.theme = "달팽이 농장"
				self.monster1 = "Snail";
				self.monster2 = "BlueSnail";
				self.monster3 = "RedSnail";
				break;
			case 2 :
				self.theme = "버섯 골짜기";
				self.monster1 = "OrangeMushroom";
				self.monster2 = "GreenMushroom";
				self.monster3 = "BlueMushroom";
				break;
			case 3 :
				self.theme = "깊은 숲";
				self.monster1 = "Resh";
				self.monster2 = "Harf";
				self.monster3 = "Steezy";
				break;
			case 4 :
				self.theme = "어두운 동굴";
				self.monster1 = "DualBurk";
				self.monster2 = "Ghost";
				self.monster3 = "Dragon";
				break;
			case 5 :
				self.theme = "슬라임 본거지";
				self.monster1 = "Slime";
				self.monster2 = "Slime";
				self.monster3 = "Slime";
				self.difficulty = 1;
				self.monster.push(new Boss("SlimeKing"));
				self.waveEndTime = 10000000;
				break;
			case 6 :
				self.theme = "하프 둥지";
				self.monster1 = "Harf";
				self.monster2 = "Harf";
				self.monster3 = "Harf";
				self.difficulty = 1;
				self.monster.push(new Boss("HarfKing"));
				self.waveEndTime = 10000000;
				break;
		}
	
	self.waveDelay = 6000 - (self.difficulty/5)*150-(self.difficulty%5)*200;
	self.setBackgroundImage();
	self.waveStartTime = performance.now();
	self.waveTime = performance.now()-3000;
	self.removeMenuEvent();
	self.addKeyEvent();
	updateInterval = window.setInterval("manager.update()",1000/60);
	
}

CanvasManager.prototype.setTheme = function() {
	var self = this;
	switch(self.themeNum){
				case 1 :
					self.theme = "달팽이 농장";
					break;
				case 2 :
					self.theme = "버섯 골짜기";
					break;
				case 3 :
					self.theme = "깊은 숲";
					break;
				case 4 :
					self.theme = "어두운 동굴";
					break;
				case 5 :
					self.theme = "슬라임 본거지";
					break;
				case 6 :
					self.theme = "하프 둥지";
					break;
			}
}



// Character.js
function Character(x,y) {	// 캐릭터
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.width = 159*0.4;
	this.height = 187*0.4;
	this.img = images.Helena;
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
	this.width = 165*0.4;
	this.height = 22*0.4;
	this.img = images.Arrow;
	if(isCritical) this.img = images.ArrowCritical;
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
	this.vy = 0;
	this.vyChangeTime = 1000;
	this.name = name;
	this.point = 10;
	this.initTime = performance.now();
	this.init();
}

Monster.prototype.init = function() {	// 초기화
	switch(this.name) {
		case "Slime" :
			this.width = 206*0.35;
			this.height = 142*0.35;
			this.maxHp = 100;
			this.point = 50;
			this.vx = -2.5;
			this.img = images.Slime;
			break;
		case "Snail" :
			this.width = 37;
			this.height = 26;
			this.maxHp = 30;
			this.point = 10;
			this.vx = -3.25;
			this.img = images.Snail;
			break;
		case "RedSnail" :
			this.width = 35*1.1;
			this.height = 34*1.1;
			this.maxHp = 80;
			this.point = 30;
			this.vx = -3;
			this.img = images.RedSnail;
			break; 
		case "BlueSnail" :
			this.width = 35*1.1;
			this.height = 34*1.1;
			this.maxHp = 50;
			this.point = 20;
			this.vx = -2.75;
			this.img = images.BlueSnail;
			break; 
		case "OrangeMushroom" :
			this.width = 63;
			this.height = 58;
			this.maxHp = 150;
			this.point = 60;
			this.vx = -3;
			this.img = images.OrangeMushroom;
			break; 
		case "GreenMushroom" :
			this.width = 56;
			this.height = 52;
			this.maxHp = 200;
			this.point = 80;
			this.vx = -3.75;
			this.img = images.GreenMushroom;
			break; 
		case "BlueMushroom" :
			this.width = 63;
			this.height = 58;
			this.maxHp = 300;
			this.point = 100;
			this.vx = -3.5;
			this.img = images.BlueMushroom;
			break; 
		case "Steezy" :
			this.width = 46;
			this.height = 30;
			this.maxHp = 200;
			this.point = 120;
			this.vx = -3;
			this.vy = 2;
			this.vyChangeTime = 500;
			this.img = images.Steezy;
			break; 
		case "Resh" :
			this.width = 62;
			this.height = 54;
			this.maxHp = 500;
			this.point = 60;
			this.vx = -2.5;
			this.img = images.Resh;
			break;
		case "Harf" :
			this.width = 66;
			this.height = 91;
			this.maxHp = 900;
			this.point = 85;
			this.vx = -3;
			this.img = images.Harf;
			break;
		case "Threetale" :
			this.width = 95;
			this.height = 75;
			this.maxHp = 1500;
			this.point = 120;
			this.img = images.Threetale;
			this.vx = -3;
			break;
		case "DualBurk" :
			this.width = 90;
			this.height = 69;
			this.maxHp = 2500;
			this.point = 200;
			this.vx = -2.5;
			this.img = images.DualBurk;
			break;
		case "Ghost" :
			this.width = 63;
			this.height = 91;
			this.maxHp = 7000;
			this.point = 300;
			this.vx = -2.2;
			this.img = images.Ghost;
			break;
		case "Dragon" :
			this.width = 76;
			this.height = 53;
			this.maxHp = 13000;
			this.point = 460;
			this.vx = -1.5;
			this.img = images.Dragon;
			break;
		case null :
			this.maxHp = 0;
			this.width = 0;
			this.height = 0;
			this.img = images.Slime;
			this.vx = 0;
			this.point = 0;
			break;
		default :
			this.width = 37;
			this.height = 26;
			this.maxHp = 30;
			this.point = 15;
			this.vx = -3;
			this.name = "Snail";
			this.img = Images.Snail;
			break;
	}
	this.hp = this.maxHp;

}

Monster.prototype.checkCollision = function() {	// 몬스터와 화살 충돌 이벤트
	var self = this;
	var n =0;
	manager.arrow.forEach(function (instance) {
		var condition1 = instance.x < self.x + self.width && instance.x + instance.width > self.x;
        var condition2 = instance.y < self.y + self.height && instance.y + instance.height > self.y;
		if(condition1 && condition2){
			var damaged = Math.floor(instance.attackDamage*0.8 + Math.random() * instance.attackDamage*0.4);
			self.hp-= damaged
			manager.damage.push(new Damage(self.x+self.width/2,self.y,damaged,instance.isCritical));
			manager.arrow.splice(n,1);
			self.knockBacked();
		}
		n++;
	});

}

Monster.prototype.knockBacked = function() {	// 몬스터 넉백
	var self = this;
	self.knockBackStartTime = performance.now();
	self.knockBackLevel = manager.knockBack;
}

Monster.prototype.checkKnockBacked = function() {	// 넉백 체크
	var self = this;
	self.tempVx = self.vx;
	if(performance.now()-self.knockBackStartTime<80){
		self.vx = self.knockBackLevel
	}
}

Monster.prototype.draw = function() {	// 몬스터 그리기
	var self = this;
	self.checkKnockBacked();
	if(performance.now()-self.initTime>self.vyChangeTime){
		self.initTime = performance.now();
		self.vy = -self.vy;
	}
	self.x += self.vx;
	self.y += self.vy;

	self.canvasCtx.drawImage(self.img,self.x,self.y,self.width,self.height);
	self.hpDraw();
	self.vx = self.tempVx;	// 넉백당시 이동속도 다시 변경
}

Monster.prototype.hpDraw = function() {
	var self = this;
	self.canvasCtx.strokeStyle = "#333333";
	self.canvasCtx.strokeRect(self.x+self.width/2-25,self.y-15,50,7.5);
	self.canvasCtx.fillStyle = "#cc0000";
	self.canvasCtx.fillRect(self.x+self.width/2-25,self.y-15,self.hp/self.maxHp*50,7.5);
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
	this.canvasCtx.fillStyle = "#0000cc";
	if(self.isCritical) {
		this.canvasCtx.font = "20px Arial";
		this.canvasCtx.fillStyle = "#ee00DD";
	}
	this.canvasCtx.fillText(self.value,self.x,self.y);
}

// Boss.js
function Boss(name) {	// 보스
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.isBoss = true;
	this.name = name;
	this.init();
}

Boss.prototype.init = function() {
	switch(this.name) {
		case "SlimeKing" :
			this.x = 700;
			this.y = 150;
			this.width = 206*1.4;
			this.height = 142*1.4;
			this.maxHp = 100000;
			this.hp = this.maxHp;
			this.point = 5000;
			this.img = images.Slime;
			this.attackDelay = 700;
			this.attackTime = performance.now();
			this.attackDeltaTime = 0;
			this.attackName = "Star";
			this.attackSpeed = -5;
			this.attackDamage = 100;
			break;
		case "HarfKing" :
			this.x = 800;
			this.y = 100;
			this.width = 66*3;
			this.height = 91*3;
			this.maxHp = 1200000;
			this.hp = this.maxHp;
			this.point = 10000;
			this.img = images.Harf;
			this.attackDelay = 800;
			this.attackTime = performance.now();
			this.attackDeltaTime = 0;
			this.attackName = "Wind";
			this.attackSpeed = -6;
			this.attackDamage = 200;
			break;
		default :
			this.x = 700;
			this.y = 150;
			this.width = 206*1.4;
			this.height = 142*1.4;
			this.maxHp = 100000;
			this.hp = this.maxHp;
			this.point = 5000;
			this.img = images.Slime;
			this.attackDelay = 700;;
			this.attackTime = performance.now();
			this.attackDeltaTime = 0;
			this.attackName = "Star";
			this.attackSpeed = -6;
			this.attackDamage = 100;
			break;
	}
}

Boss.prototype.checkAttack = function () {	// 보스 공격 체크
	var self = this;
	this.attackDeltaTime = performance.now() - this.attackTime;
	if(this.attackDelay<this.attackDeltaTime){
		self.attackTime = performance.now();
		manager.EnemyAttack.push(new EnemyAttack(1000,Math.random()*450,self.attackSpeed,0,self.attackName,self.attackDamage));
	}
}

Boss.prototype.draw = function() {	// 보스 그리기
	var self = this;
	self.checkAttack();
	self.hpDraw();
	self.canvasCtx.drawImage(self.img,self.x,self.y,self.width,self.height);

}

Boss.prototype.hpDraw = function() {	// 체력바 그리기
	var self = this;
	self.canvasCtx.strokeStyle = "#333333";
	self.canvasCtx.strokeRect(200,10,600,20);
	self.canvasCtx.fillStyle = "#cc0000";
	self.canvasCtx.fillRect(200,10,self.hp/self.maxHp*600,20);
}

Boss.prototype.checkCollision = function() {	// 보스 몬스터와 화살 충돌 이벤트
	var self = this;
	var n =0;
	manager.arrow.forEach(function (instance) {
		var condition1 = instance.x < self.x + self.width && instance.x + instance.width > self.x;
        var condition2 = instance.y < self.y + self.height && instance.y + instance.height > self.y;
        if(condition1 && condition2){
			self.hp-= instance.attackDamage;
			manager.damage.push(new Damage(self.x+self.width/2,self.y,instance.attackDamage,instance.isCritical));
			manager.arrow.splice(n,1);
		}
		n++;
	});

}

// EnemyAttack.js
function EnemyAttack(x,y,vx,vy,name,damage) {
	this.canvas = document.querySelector('.my-canvas');
	this.canvasCtx = this.canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.name = name;
	this.damage = damage;
	this.init();
}

EnemyAttack.prototype.init = function() {
	switch(this.name) {
		case "Star" :
			this.width = 195*0.4;
			this.height = 184*0.4; 
			this.img = images.Star;
			break;
		case "Wind" :
			this.width = 64*0.8;
			this.height = 131*0.8;
			this.img = images.Wind;
			break;
		default :
			this.width = 195*0.4;
			this.height = 184*0.4; 
			this.img = images.Star;
			break;
	}
}

EnemyAttack.prototype.draw = function() {
	var self = this;
	self.x += self.vx;
	self.y += self.vy;
	self.canvasCtx.drawImage(self.img,self.x,self.y,self.width,self.height);

}

// Application.js
var manager;
var imglength=0;
var images;
document.addEventListener("DOMContentLoaded",function() {	// 로드시 이벤트
	images = new Img();
});

