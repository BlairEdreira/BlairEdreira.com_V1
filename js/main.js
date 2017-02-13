$(document).ready(function(){


//init ScrollMagic
//use control bar and use animaiton
var controller = new ScrollMagic.Controller();

//pin the intro (fixed position)
var pinIntroScene = new ScrollMagic.Scene({
	triggerElement: '#intro',
	triggerHook: 0,
	duration: '30%'
})

.setPin('#intro', {pushFollowers: false})
.addTo(controller);

//pin the intro again after (fixed position)
var pinIntroScene2 = new ScrollMagic.Scene({
	triggerElement: '#project01',
	triggerHook: 0.4
})

.setPin('#intro', {pushFollowers: false})
.addTo(controller);




//paralax scene

var parallaxTl = new TimelineMax(); // fading text in. This is a time line 
parallaxTl
.from('.content-wrapper',0.4 /*timing*/,{autoAlpha: 0, ease:Power0.easeNone}, 0.4/*offset*/) //first tween fade text
.from('.bcg', 2, {y: '-50%', ease:Power0.easeNone}, 0); //second tween move image


var slideParallaxScene = new ScrollMagic.Scene({ //moving back ground
	triggerElement: '.bcg-parallax',
	triggerHook: 1,
	duration: '100%'
	
})

.setTween(parallaxTl)//starts at -50% then moves to origional 0. look as css of .bcg\. look at greensock101 to learn this. this is the basic from tween
.addTo(controller);

//loop through each .project element 
$('.project').each(function(){
	
	//console.log(this); //use to finder each child of element to star animation at picture
	//build scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: this.children[0],//use ID (#project01 img) of div for a single trigger or use this when in a loop
		//duration: '90%', //pixels. can also we % of view port
		triggerHook: 0.9, //bottom of page. 0 is top of page. left blannk is middle
		reverse: false //animation will only happen once
	})

	.setClassToggle(this, 'fade-in') //add class to project01. use ID (#project01) of div for a single set class or use this when in a loop
	.addIndicators({
		//create dif labels for triggers
		name: 'fade scene',
		colorTrigger: 'black',
		//indent: 200,
		colorStart: 'green',
		colorEnd: 'purple'
	}) //this requires a plugin
	.addTo(controller);
})

});


















