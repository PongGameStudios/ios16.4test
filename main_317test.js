lineCount= 0;
_err = console.error;
console.error = function (str) {
	updateScreenLogs(str);
	_err.apply(console,arguments);
}
_warn = console.warn;
console.warn = function (str) {
	updateScreenLogs(str);
	_warn.apply(console,arguments);
}
_log = console.log;
console.log = function (str) {
	updateScreenLogs(str);
	_log.apply(console,arguments);
}

updateScreenLogs = function(str) {
	var label = document.getElementById("logs");
	var curText = label.innerHTML;
	lineCount++;
	if(lineCount >= 50) {
		label.innerHTML = str;
		lineCount = 0;
	} else {
		label.innerHTML = str +"<br>"+ curText;
	}
};


cc.game.onStart = function () {
    cc.log("onStart");
    cc.view.enableRetina(true);
    cc.view.setDesignResolutionSize(1024, 768, cc.ResolutionPolicy.SHOW_ALL);

    //setTimeout(function () {
   //     cc.view.setMaxResolution(1024, 768);
   // }, 100);

	cc.director.runScene(new TestScene());
};

var TestScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        cc.log("test scene");
		
		for(var i=0;i<12;i++) {
			var sprite = new cc.Sprite("img"+i+".png");
			this.addChild(sprite);

			sprite.x = 100 + (i*10);
			sprite.y = 600 - (i*10);

			sprite.runAction(cc.sequence(
				cc.rotateBy(0.5, 180)
			).repeatForever());
		}
		for(var i=0;i<12;i++) {
			var sprite = new cc.Sprite("img"+i+".png");
			this.addChild(sprite);

			sprite.x = 300 + (i*10);
			sprite.y = 600 - (i*10);

			sprite.runAction(cc.sequence(
				cc.rotateBy(0.5, 180)
			).repeatForever());
		}
		for(var i=0;i<12;i++) {
			var sprite = new cc.Sprite("img"+i+".png");
			this.addChild(sprite);

			sprite.x = 500 + (i*10);
			sprite.y = 600 - (i*10);

			sprite.runAction(cc.sequence(
				cc.rotateBy(0.5, 180)
			).repeatForever());
		}
		for(var i=0;i<12;i++) {
			var sprite = new cc.Sprite("img"+i+".png");
			this.addChild(sprite);

			sprite.x = 700 + (i*10);
			sprite.y = 600 - (i*10);

			sprite.runAction(cc.sequence(
				cc.rotateBy(0.5, 180)
			).repeatForever());
		}
		
		for(var i=0;i<12;i++) {
			var sprite = new cc.Sprite("img"+i+".png");
			this.addChild(sprite);

			sprite.x = 100 + (i*10);
			sprite.y = 400 - (i*10);

			sprite.runAction(cc.sequence(
				cc.rotateBy(0.5, 180)
			).repeatForever());
		}
		for(var i=0;i<12;i++) {
			var sprite = new cc.Sprite("img"+i+".png");
			this.addChild(sprite);

			sprite.x = 300 + (i*10);
			sprite.y = 400 - (i*10);

			sprite.runAction(cc.sequence(
				cc.rotateBy(0.5, 180)
			).repeatForever());
		}
		for(var i=0;i<12;i++) {
			var sprite = new cc.Sprite("img"+i+".png");
			this.addChild(sprite);

			sprite.x = 500 + (i*10);
			sprite.y = 400 - (i*10);

			sprite.runAction(cc.sequence(
				cc.rotateBy(0.5, 180)
			).repeatForever());
		}
		for(var i=0;i<12;i++) {
			var sprite = new cc.Sprite("img"+i+".png");
			this.addChild(sprite);

			sprite.x = 700 + (i*10);
			sprite.y = 400 - (i*10);

			sprite.runAction(cc.sequence(
				cc.rotateBy(0.5, 180)
			).repeatForever());
		}
		
		//this.scheduleUpdate();
    }
	/*printTime: 0,
	total:0,
	update:function(dt){
		this.printTime += dt;
		if(this.printTime >= 1) {
			this.total++;
			cc.log("UPDATE "+this.total);
			this.printTime = 0;
		}
	}*/
});

