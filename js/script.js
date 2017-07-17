// JavaScript Document
window.onload = function(){
	console.log("Junior developer test.");
	
	// declare your variables here.
	var background, sky, products, text1, text2, text3, text4, 
		shadowFree, button1, text5, text6, text7, text8, button2,
		button3, button4, button5, button6, button7, button8;
	
	// store a reference to the canvas which we will draw on.
	var stage = new createjs.Stage("stage");
	
	// register the stage to handle mouse events. 
	stage.enableMouseOver(10);
	
	// register the Ticker to listen for the tick event.
	createjs.Ticker.addEventListener("tick", handleTick, false);
	
	// redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
	function handleTick(event) {
		stage.update();
	}
	
	// create a preloader to load the images.
	var loader = new createjs.LoadQueue(false);
	
	// when all images are loaded call the handleAllImageLoaded function.
	loader.on('complete', handleAllImagesLoaded, this);
	
	// provide a manifest of files and ids to be loaded.
	loader.loadManifest([
		{id: "background", src:"images/background.png"},
		{id: "sky", src:"images/sky.png"},
		{id: "products", src:"images/products.png"},
		{id: "text1", src:"images/text1.png"},
		{id: "text2", src:"images/text2.png"},
		{id: "text3", src:"images/text3.png"},
		{id: "text4", src:"images/text4.png"},
		{id: "free", src:"images/free.png"},
		{id: "shadowFree", src:"images/shadowFree.png"},
		{id: "button1", src:"images/button1.png"},
		{id: "text5", src:"images/text5.png"},
		{id: "text6", src:"images/text6.png"},
		{id: "text7", src:"images/text7.png"},
		{id: "text8", src:"images/text8.png"},
		{id: "button2", src:"images/button2.png"},
		{id: "button3", src:"images/button3.png"},
		{id: "button4", src:"images/button4.png"},
		{id: "button5", src:"images/button5.png"},
		{id: "button6", src:"images/button6.png"},
		{id: "button7", src:"images/button7.png"},
		{id: "button8", src:"images/button8.png"},
	]);
	
	function handleAllImagesLoaded() {
		console.log("All the images have loaded.");
		drawTheBannerBackground();
	}
	
	function drawTheBannerBackground() {
		console.log("draw and animate the background.");
		
		// provide the loader result for the item with id == 'background'
		// as a bitmap which will be stored in our background variable.
		background = new createjs.Bitmap( loader.getResult( "background" ) );
		// I've included the logo here since it stays in all frames.
		sky = new createjs.Bitmap( loader.getResult( "sky" ) );
		// set the background bitmap alpha to zero.
		background.alpha = 0;
		sky.alpha = 0;
		
		// add background to the display list.
		stage.addChild( background );
		stage.addChild( sky);
		
		// animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
		createjs.Tween.get( background ).to( {alpha:1}, 1000 );
		createjs.Tween.get( sky ).to( {alpha:1}, 1000 );
		
		// after the background is drawn on the canvas draw and animate the content for frame 1.
		setTimeout(frame1, 100);
	}
	
	function frame1() {
		console.log("draw and animate frame one.");
		
		// refer to the creative brief, frame 1 for guidance.
		// The two products should appear immediately on the first frame.
		products = new createjs.Bitmap( loader.getResult( "products" ) );
		products.alpha = 0;
		stage.addChild( products );
		createjs.Tween.get( products )
			.to( {alpha:1}, 500 )
			.wait(3200)
			.to( {alpha:0}, 500 );

		// Fade in the text with the gradient.
		// The banner should wait for two seconds with all frame 1 content on the screen.
		text1 = new createjs.Bitmap( loader.getResult( "text1" ) );
		stage.addChild( text1 );
		text1.alpha = 0;
		createjs.Tween.get(text1)
         .wait(500)
         .to({alpha:1}, 900)
         .wait(2000)
         .to({alpha:0}, 800);
        
        // Then fade in the blue copy.
		// Fade out all content on frame one except the background image and Sky logo.
        text2 = new createjs.Bitmap( loader.getResult( "text2" ) );
		stage.addChild( text2 );
		text2.alpha = 0;
		createjs.Tween.get(text2)
         .wait(1100)
         .to({alpha:1}, 800)
         .wait(1800)
         .to({alpha:0}, 700);

		// after a timeout and the animations have completed, draw frame 2.
		// Total time for frame 1 is less than 4.2 sec.
		setTimeout(frame2, 4200);
	}
	
	function frame2() {
		console.log("draw and animate frame two.");
		
		// refer to the creative brief, frame 2 for guidance.
		// Fade in the text with the gradient.
		text3 = new createjs.Bitmap( loader.getResult( "text3" ) );
		stage.addChild( text3 );
		text3.alpha = 0;
		createjs.Tween.get(text3)
         .wait(700)
         .to({alpha:1}, 700)
         .wait(3100)
         .to({alpha:0}, 500);

        // Then fade in the grey copy.
        text4 = new createjs.Bitmap( loader.getResult( "text4" ) );
		stage.addChild( text4 );
		text4.alpha = 0;
		createjs.Tween.get(text4)
         .wait(2500)
         .to({alpha:1}, 700)
         .wait(1600)
         .to({alpha:0}, 500);

        /*At the same time as the grey copy animate the gradient stamp (12 Months FREE SKY BROADBAND UNLIMITED) 
        should animate from the top (off screen) to its final position, and bounce when it lands. You need to 
        create an effect that makes it appear to fall from the sky and bounce a bit on the ground when it lands.*/
        free = new createjs.Bitmap( loader.getResult( "free" ) );
		stage.addChild( free );
		free.y=-300;
        createjs.Tween.get(free)
        	.wait(1700)
		  	.to({y: 0}, 800)
		  	.to({y: 0, rotation: -.4},200, createjs.Ease.bounceInOut)
		  	.to({y: -2}, 200)
		  	.to({y: 0, rotation: 0},200, createjs.Ease.bounceInOut)
		  	.to({y: -1, rotation: .2}, 200)
		  	.to({y: 0, rotation: 0},200, createjs.Ease.bounceInOut)
		  	.wait(1300)
		  	.to({alpha:0}, 1000);
		createjs.Ticker.setFPS(60);

		// I've added the shadow effect here, synchronized with the landing.
		shadowFree = new createjs.Bitmap( loader.getResult( "shadowFree" ) );
		stage.addChild( shadowFree );
		shadowFree.alpha = 0;
		createjs.Tween.get(shadowFree)
         .wait(2600)
         .to({alpha:1}, 1000, createjs.Ease.getPowInOut(2))
         .wait(1000)
         .to({alpha:0}, 1000);

		// after a timeout and the animations have completed, draw frame 3.
		// Total time for frame 2 is less than 5.6 sec.
		setTimeout(frame3, 5600);
	}
	
	function frame3() {
		console.log("draw and animate frame three.");
		
		// refer to the creative brief, frame 3 for guidance.
		// The call to action ("Find out more") button image should appear immediately on the third frame.
		// At the end, also animate a white blurred sheen (reference) across the call to action ("Find out more") button.
		// Sprites could have been easier.
		button1 = new createjs.Bitmap( loader.getResult( "button1" ) );
		stage.addChild( button1 );
		button1.alpha = 0;
		button2 = new createjs.Bitmap( loader.getResult( "button2" ) );
		stage.addChild( button2 );
		button2.alpha = 0;
		button3 = new createjs.Bitmap( loader.getResult( "button3" ) );
		stage.addChild( button3 );
		button3.alpha = 0;
		button4 = new createjs.Bitmap( loader.getResult( "button4" ) );
		stage.addChild( button4 );
		button4.alpha = 0;
		button5 = new createjs.Bitmap( loader.getResult( "button5" ) );
		stage.addChild( button5 );
		button5.alpha = 0;
		button6 = new createjs.Bitmap( loader.getResult( "button6" ) );
		stage.addChild( button6 );
		button6.alpha = 0;
		button7 = new createjs.Bitmap( loader.getResult( "button7" ) );
		stage.addChild( button7 );
		button7.alpha = 0;
		button8 = new createjs.Bitmap( loader.getResult( "button8" ) );
		stage.addChild( button8 );
		button8.alpha = 0;

		createjs.Tween.get( button1 )
			.to( {alpha:1}, 700 )
			.wait(3000)
			.to( {alpha:0}, 15);
		createjs.Tween.get( button2 )
			.wait(3800)
			.to( {alpha:1}, 100 )
			.wait(100)
		createjs.Tween.get( button3 )
			.wait(3900)
			.to( {alpha:1}, 100 )
			.wait(100)
		createjs.Tween.get( button4 )
			.wait(4000)
			.to( {alpha:1}, 100 )
			.wait(100)
		createjs.Tween.get( button5 )
			.wait(4100)
			.to( {alpha:1}, 100 )
			.wait(100)
		createjs.Tween.get( button6 )
			.wait(4200)
			.to( {alpha:1}, 100 )
			.wait(100)
		createjs.Tween.get( button7 )
			.wait(4300)
			.to( {alpha:1}, 100 )
			.wait(100)
			.to( {alpha:0}, 15);
		createjs.Tween.get( button8 )
			.wait(4400)
			.to( {alpha:1}, 100 )
			.wait(100)
			.to( {alpha:0}, 15);
		createjs.Tween.get( button1 )
			.wait(4600)
			.to( {alpha:1}, 100 );

		// Fade in the text with the gradient.
		text5 = new createjs.Bitmap( loader.getResult( "text5" ) );
		stage.addChild( text5 );
		text5.alpha = 0;
		createjs.Tween.get(text5)
         .wait(500)
         .to({alpha:1}, 800);

        // Then fade in the blue copy.
        text6 = new createjs.Bitmap( loader.getResult( "text6" ) );
		stage.addChild( text6 );
		text6.alpha = 0;
		createjs.Tween.get(text6)
         .wait(1200)
         .to({alpha:1}, 800);

        // Then fade in the "Limited time offer" gradient copy.
        text7 = new createjs.Bitmap( loader.getResult( "text7" ) );
		stage.addChild( text7 );
		text7.alpha = 0;
		createjs.Tween.get(text7)
         .wait(2200)
         .to({alpha:1}, 800);

        // Then fade in the grey copy.
        text8 = new createjs.Bitmap( loader.getResult( "text8" ) );
		stage.addChild( text8 );
		text8.alpha = 0;
		createjs.Tween.get(text8)
         .wait(2800)
         .to({alpha:1}, 800);

        // Total time for frame 3 is less than 4.7 sec.
        // The animation lasts less than 14.6 sec.
	}
	
};