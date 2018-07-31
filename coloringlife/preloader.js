coloringligfire.preloader  = function(game){
	coloringligfire.GAME_WIDTH = 320;
	coloringligfire.GAME_HEIGHT = 480;
}

//load image 
coloringligfire.preloader = function(game){
	preload:function(){
		this.load.image('bgPic','bgPic.png');

	}

	create:function(){
		this.state.start('Game');
	}
}