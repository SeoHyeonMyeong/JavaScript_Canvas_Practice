function CanvasManager() {
	this.canvas = document.querySelector(".my-canvas");
	this.canvasCtx = this.canvas.getContext('2d');
	this.setup();
}

CanvasManager.prototype.setup = function() {	// 캔버스를 흰색으로 색칠
	this.canvasCtx.fillStyle = "#fff";
	this.canvasCtx.fillRect(0,0,500,500);
}

document.addEventListener("DOMContentLoaded",function() {
	var manager = new CanvasManager();
});