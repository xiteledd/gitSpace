var coloringlife = {};
coloringlife.Boot = function(game) {}
coloringlife.Boot.prototype = {
	create:function(){
		//set scale option
		this.input.maxPointers = 1;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		// start the Preloader state
		this.state.start('preloader');
	}
};