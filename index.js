enchant(); //…①

var picNumber = 0; //…②
var picNumber2 = 10

window.onload = function() { //…③
var game = new Game(320, 480); //…④
game.preload('http://enchantjs.com/assets/images/chara1.gif'); //…⑤
game.onload = function() { //…⑥
    
var bear = new Sprite(32,128); //…⑦
var bear2 = new Sprite(32,64);
    
bear.image = //…⑧    
	game.assets['http://enchantjs.com/assets/images/chara1.gif'];
bear2.image = 
    game.assets['http://enchantjs.com/assets/images/chara1.gif'];
    
bear.frame = 0; //…⑨
bear2.frame = 10

bear.addEventListener(Event.ENTER_FRAME, function() { //…⑩
picNumber++; //…⑪
if (picNumber > 3) { //…⑫
picNumber = 0;
}
bear.frame = picNumber; //…⑬
bear.x += 1; //…⑭
});

bear2.addEventListener(Event.ENTER_FRAME, function() { //…⑩
picNumber2++; //…⑪
if (picNumber2 > 13) { //…⑫
picNumber2 = 10;
}
bear2.frame = picNumber2; //…⑬
bear2.x += 2; //…⑭
});    
    game.rootScene.addChild(bear); //…⑮
    game.rootScene.addChild(bear2); //…⑮
};
game.start(); //…⑯
};