// canvas.js
function CanvasManager() {
	this.canvas = document.querySelector(".my-canvas");
	if (this.canvas.getContext){
  		this.canvasCtx = this.canvas.getContext('2d');
	} 
	else {
 		alert("캔버스를 지원하지 않습니다.");
	}
	this.setup();
	this.drawRect();
	this.drawTriangle();
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


// application.js
document.addEventListener("DOMContentLoaded",function() {	// 로드시 이벤트
	var manager = new CanvasManager();
});