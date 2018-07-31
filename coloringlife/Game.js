//文件引用
coloringlife.Game = function(game){
	// define needed variables for Game
	this.PaintLayer  = null;	
	this.bg = null;
	this.cellWidth= 10;
	this.beginX = 35;
	this.beginY = 65;
	this.row = 19;
	this.col = 23;
	this.markNum = 0;
	coloringlife.colorIdx = [
		[0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0],
		[0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0],
		[0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0],
		[1,1,1,0,2,2,2,1,1,1,0,0,0,1,1,1,2,2,2,1,1,1,1],
		[1,1,0,2,2,2,2,2,1,1,1,0,1,1,1,2,2,2,2,2,1,1,1],
		[1,1,0,2,2,0,2,2,2,1,1,1,1,1,2,2,2,2,2,2,2,1,1],
		[1,1,2,2,0,3,3,2,2,2,1,1,1,2,2,2,3,3,2,2,2,1,1],
		[1,1,1,2,2,3,3,3,2,2,2,1,2,2,2,3,3,3,2,2,1,1,1],
		[0,1,1,1,2,2,3,3,3,3,2,2,2,3,3,3,3,2,2,1,1,1,0],
		[0,0,1,1,1,2,2,3,3,3,3,2,3,3,3,3,2,2,1,1,1,0,0],
		[0,0,0,1,1,1,2,2,3,3,3,3,3,3,3,2,2,1,1,1,0,0,0],
		[0,0,0,0,1,1,1,2,2,3,3,3,3,3,2,2,1,1,1,0,0,0,0],
		[0,0,0,0,0,1,1,1,2,2,3,3,3,2,2,1,1,1,0,0,0,0,0],
		[0,0,0,0,0,0,1,1,1,2,2,3,2,2,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,1,1,1,2,2,2,1,1,1,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,1,1,1,2,1,1,1,0,0,0,0,0,0,0,0],		
		[0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
	];
	coloringlife.state = [
		[0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0]
		[0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0]
		[0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0]
		[1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1]
		[1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1]
		[1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		[1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
		[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]
		[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0]
		[0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0]
		[0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0]
		[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0]
		[0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0]
		[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0]
		[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
		[0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0]
		[0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0]
		[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
	];

	coloringlife.colorArray = {};

}



coloringlife.Game.prototype = {
	preload:function(){

	}

	create:function(){

	}

	initUI:function(){
		//bg
		this.bg = this.add.sprite(0,0,'bgPic');
		PaintLayer.addChild(this.bg);

	}

	initData:function(){
		this.colorArray = [];

		coloringlife.colorArray = {
			1:0x979797;//外灰
			2:0xb2b2b2;//中灰
			3:0xcacaca;//内灰
			4:0xffffff;//白
			5:0xf14058;//外红
			6:0xf67082;//中红
			7:0xf99aa7;//内红
		};


	}

	//创建色块对象
	ColorRect:function() = {};
	//对象属性
	ColorRect.prototype.row = 0;
	ColorRect.prototype.col = 0;
	ColorRect.prototype.color = null;
	ColorRect.prototype.num = 0;
	//对象方法


	Piant:function(row,col,color){
		if(row!==undefined&&col!==undefined){
			var tempx = RcToXy(row,col).x,
				tempy = RcToXy(row,col).y;

			//
			var rect = this.add.graphics();
			this.bg.addChild(rect);
			rect.beginFill(color);
			rect.drawRect(tempx,tempy,cellWidth,cellWidth);
			rect.endFill();


		}
	}

	RcToXy:function(row,col){
		var tempx,tempy;
		if(row!==undefined&&col!==undefined
			&&0<=row&&row<=this.row
			&&0<col&&col<=this.col){
			tempx = this.beginX+col*this.cellWidth;
			tempy = this.beginY+row*this.cellWidth;
		}
		return{
			x:tempx,
			y:tempy
		};
	}

	//坐标转换,x坐标转换成列，y坐标转换成行
	transX:function(x){
		var tempcol;
		if(this.beginX<x&&x<this.beginX+this.row*this.cellWidth){
			tempcol = Math.floor((x-this.beginX)/this.cellWidth);
			return tempcol;
		}
	}	

	//返回行
	transY:function(y){
		var temprow;
		if(this.beginY<y&&y<thisY+this.col*this.cellWidth){
			temprow = Math.floor((y-this.beginY)/this.cellWidth);
			return temprow;
		}
	}
	//由数组创建绘制区域
	createPalette:function(){
		var tempcol;
		if(this.beginX<x&&x<this.beginX+this.row*this.cellWidth){
			tempcol = Math.floor((x-this.beginX)/this.cellWidth);
			return tempcol;
		}
	}


}
