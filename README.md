# BlairEdreira.com

## About
Welcome to my personal site. The goal I had in mind when creating BlairEdreira.com was one of interest and captivity. I wanted to pull the visitor in with an interesting, animated front page and only grasp more of their attention as they scrolling down the page. Animations do a great job when it comes to grabbing the user’s attention. Fluidity is something I try to incorporate in any project I’m working on whether it be a web site or an application. Everything should have a transition as well as smooth entrances and exits. I built this website from scratch with no templates. You might ask why but I felt like my development career should include at least one project where I started with a blank page and ended up with a fully functional website. This site acts as my portfolio and its sole purpose is to let other know what I can do. 

## The Tools

Although I built this site without any templates I did use some interesting tools to get the effects and animations I wanted. Check out the roles each tool played below:

### [Google Fonts](https://fonts.google.com/) - Text formatting 
    <!--Google Fonts-->
    <link href='http://fonts.googleapis.com/css?family=Raleway:100|Open+Sans:400,300' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet">
### [Font Awesome](http://fontawesome.io/) - Icons
    <!--Font Awesome-->
    <script src="https://use.fontawesome.com/d3e28d0cf4.js"></script>
    
    EXAMPLE:
    <h1><i aria-hidden="true" class="fa fa-plus"></i>About Me</h1>
    
### [amCharts](https://www.amcharts.com/) - Annimated Skills Chart
    <!--Skill Chart-->
    <script src="https://www.gstatic.com/charts/loader.js" type="text/javascript"></script>
    <script src="js/amcharts.js"></script>
    <script src="js/pie.js"></script>
    
    EXAMPLE:
    //Chart Controller
    var chartCtrl = new ScrollMagic.Controller();

    var skillsChart = {
                "type": "pie",
                "angle": 12,
                "balloonText": "[[title]]<br><span style='font-size:14px'> ([[percents]]%)</span>",
                "depth3D": 15,
                "innerRadius": 0,
                "labelText": "[[title]]",
                "minRadius": 0,
                "radius": "40%",
                "startAngle": 0,
                "startRadius": "100%",
                "baseColor": "",
                "colors": [
                "#FF0F00",
                "#FF6600",
                "#FF9E01",
                "#FCD202",
                "#F8FF01",
                "#B0DE09",
                "#04D215",
                "#0D8ECF",
                "#0D52D1",
                "#2A0CD0",
                "#8A0CCF",
                "#CD0D74",
                "#754DEB",
                "#DDDDDD",
                "#999999",
                "#333333",
						"#000000",
						"#57032A",
						"#CA9726",
						"#990000",
						"#4B0C25"
				    ],
				    "labelTickAlpha": 0.04,
				    "labelTickColor": "",
				    "marginBottom": 0,
				    "marginTop": 0,
				    "pullOutOnlyOne": false,
				    "titleField": "category",
				    "valueField": "column-1",
				    "color": "black",
				    "fontSize": 12,
				    "percentPrecision": 0,
				    "precision": 0,
				    "allLabels": [],
				    "balloon": {
				        "animationDuration": .05,
				        "fadeOutDuration": .05,
				        "showBullet": true
				    },
				    "legend": {
				        "enabled": false,
				    },
				    "titles": [],
				    "dataProvider": [
						{
						    "category": "HTML",
						    "column-1": "95"
						},
						{
						    "category": "CSS",
						    "column-1": "95"
						},
						{
						    "category": "Javascript",
						    "column-1": "70"
						},
						{
						    "category": "PHP",
						    "column-1": "75"
						},
						{
						    "category": "SQL",
						    "column-1": "65"
						},
						{
						    "category": "Java",
						    "column-1": "5"
						},
						{
						    "category": "VB.NET",
						    "column-1": "10"
						},
						{
						    "category": "C#.NET",
						    "column-1": "25"
						},
						{
						    "category": "",
						    "column-1": "1"
						},
                        {
                            "category": "Python",
                            "column-1": "30"
                        }
				    ]
    };


    var chartTimeLine = new TimelineMax();
    chartTimeLine

        .from('#chartdiv', .5, {opacity: '0', ease: Power0.easeNone }, 0);

    var chartScene = new ScrollMagic.Scene({
        triggerElement: '#resume_container',
        triggerHook: 0.3,
        reverse: true
    })


    .on('start', function () {
        console.log("passed trigger");
        AmCharts.makeChart("chartdiv", skillsChart);
    })

    .setTween(chartTimeLine)
    .addTo(chartCtrl);
    
### [jQuery](https://jquery.com/) - All scripts are written in jQuery
    <!--Jquery-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    
    EXAMPLE:
    //==================Smooth Scrolling==================
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate(
					{
					    scrollTop: target.offset().top
					}, 1000);
                    return false;
                }
            }
        });
    });

### [jQuery Flip](https://nnattawat.github.io/flip/) - Animated project flip tiles
    <!--Jquery Flip-->
    <script src="js/jquery.flip.js"></script>
    
    EXAMPLE:
	<div class="project_box" id="card2">
	<div class="front" style="background-image: url('img/logo_trans.png');"></div>
	<div class="back">
	    <h1>Coming Soon!</h1>
	    <a class="outerSquare" href="">
		<span class="fa-stack fa-lg">
		    <i class="fa fa-square fa-stack-2x"></i>
		    <i class="fa fa-github fa-stack-1x fa-inverse"></i>
		</span>
	    </a>
	    <a class="outerSquare" href="">
		<span class="fa-stack fa-lg">
		    <i class="fa fa-square fa-stack-2x"></i>
		    <i class="fa fa-globe fa-stack-1x fa-inverse"></i>
		</span>
	    </a>
	    <a class="outerSquare blackOut" id="saIntranet">
		<span class="fa-stack fa-lg">
		    <i class="fa fa-square fa-stack-2x"></i>
		    <i class="fa fa-question fa-stack-1x fa-inverse"></i>
		</span>
	    </a>
	</div>
	</div>

### [GreenSock](https://greensock.com/) - GSAP - Animation tweens and sequencing 
	<!-- GreenSock TweenMax-->
    	<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js"></script>
	
	EXAMPLE:
	 //==================Scene NavigationPin==================
	    var navPinTween = new TimelineMax();
	    navPinTween.to('#nav', .2,
		{
		    backgroundColor: 'rgba(255,255,255,.5)'
		}).to('.navFont', .1,
		{
		    color: 'black'
		}).to('.navLeft', 0,
		{
		    opacity: '1'
		}, '-=.15');
	
### [ScrollMagic](http://scrollmagic.io/) - Scrolling interactions
    <!-- ScrollMagic-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
    
    EXAMPLE:
	...//
    var pinNavigationScene = new ScrollMagic.Scene(
		{
		    triggerElement: '#nav',
		    duration: $(window),
		    triggerHook: 0
		}).setTween(navPinTween).setPin('#nav',
		{
		    pushFollowers: true
		}).addTo(controller);












