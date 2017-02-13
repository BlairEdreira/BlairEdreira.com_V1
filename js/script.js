$(document).ready(function () {
    $("body").fadeIn(1000);
    $(".blackOut").click(function () {
       
        event.preventDefault();

        //if staement for each block
        var btnID = $(this).attr('id');
        //alert(btnID);
        if (btnID === 'portfolio') {
            newLocation = '/Portfolio.html';
        } else if (btnID === 'saIntranet') {
            newLocation = '/SA_Intranet.html';
        } else {
            alert('Something went wrong! Refresh page and try again');
        }


        $('#Project_content').fadeOut(1000, newpage);


    function newpage() {
    
        window.location = newLocation;
    }

    });

    
    
//=============Get in Touch Now form===========
    $("#submitGetInTouch").click(function(){
    var form = $("#getInTouchForm");
    var data = $(form).serialize();
/*var data = {
    name: $("#NameInput").val(),
     subject: $("#SubjectInput").val(),
      email: $("#EMailInput").val(),
       message: $("#MessageInput").val(),
       phone: $("#PhoneInput").val()
};*/

        $.ajax({
            type: "POST",
            url: "../get_in_touch.php",
            data: data,
            success: function() {
                console.log(data);
            }, 
            error: function() {
                alert("Sorry, this service not available at the moment. </br> Please try again later.");
            }
        });

        return false;
    });
    
    //=======================Down arrow load=============

    $("#downChevron").delay(3000).fadeTo(500, .5, blinker());

    function blinker() {
        $("#downChevron").fadeIn(750);
        $("#downChevron").fadeOut(750);
    }
    setInterval(blinker, 1000);

    //=======================Downlaod Resume=============

    //$("#download_resume").delay(3000).fadeTo(500, .5, blinker());

    function download() {
        $("#download_resume").fadeIn(750);
        $("#download_resume").fadeOut(750);
    }
    setInterval(download,750);

    
 

//==========================Mobile Navigation================

    //Click menu button
    $(".mobileShow").click(function () {
        /* Open when someone clicks on the span element */
        if ($(".overlay").css("bottom") != "0vh"){
             $(".overlay").css({bottom:"0vh"});
            $("body").css({overflow:"hidden"});
           
        }
        
        if($(".overlay").css("bottom") === "0px"){
            $(".overlay").css({bottom:"-100vh"});
            $("body").css({overflow:"initial"});
        }   
    })

    //Click any link
    $(".navFontOverlay").click(function () {
        $(".overlay").css({bottom:"-100vh"});
        $("body").css({overflow:"initial"});
    })

    //==================Replace Header Loop==================

    /** var items = ["am a developer","can do front-end","can do back-end", "HTML","am Blair Edreira"],
     $text = $( '#intro-heading span' ),
     delay = 2; //seconds
 
 function loop ( delay ) {
     $.each( items, function ( i, elm ){
         $text.delay( delay*1E3).fadeOut();
         $text.queue(function(){
             $text.html( items[i] );
             $text.dequeue();
         });
         $text.fadeIn();
         $text.queue(function(){
             if ( i == items.length -1 ) {
                 loop(delay);   
             }
             $text.dequeue();
         });
     });
 }

 loop( delay ); */

    $(function () {

        var t = ["INNOVATIVE", "BLAIR EDREIRA", "A DEVELOPER", "A DESGINER", "CREATIVE"],
            $h1 = $(".weare__rotativa"),
            $sp = $h1.find(".weare__rotativa--highlight"),
            i = 0,
            widths = [];

        $.each(t, function (i, v) {
            var el = $('<span />', {
                text: v
            }).appendTo($h1);
            widths.push(el.width() * 1);
            el.remove();
        });

        $sp.css({
            opacity: 0
        });

        (function loop() {
            i = ++i % t.length;
            $sp.text(t[i]).animate({ width: widths[i] }, 500, function () {
                //                TweenLite.to($sp.text(t[i]), 0.5, {width:widths[i], onComplete:function () {
                TweenLite.to($sp.text(t[i]), 0.5, { autoAlpha: 1 });
                TweenLite.to($sp.text(t[i]), 0.5, { autoAlpha: 0, delay: 2, onComplete: loop });
                //            }});
            });
        })();
    });

    //==================Smooth Scrolling==================

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    //==================Navigation Animation==================
    $(".navFont").hover(function () {
        $(this).addClass("txt-color");
    }, function () {
        $(this).removeClass("txt-color");
    });

    //==================Project Section==================

    $("#card").flip({
        trigger: 'hover',
        reverse: true
    });
    $("#card2").flip({
        trigger: 'hover',
        reverse: true
    });
    $("#card3").flip({
        trigger: 'hover',
        reverse: true
    });








    //========================================================================
    //                              Scroll Magic
    //========================================================================

    //Controller. (Window Scroll)
    var controller = new ScrollMagic.Controller();

    //==================Scene Parallax==================
    //Parallax of intro picture
    var parallaxTl = new TimelineMax(); // fading text in. This is a time line 
    parallaxTl
        //.from('.content-wrapper',0.1 /*timing*/,{autoAlpha: 1, ease:Power0.easeNone}, -10/*offset*/) //first tween fade text
        .from('.bcg', 1, { y: '-30%', ease: Power0.easeNone }, 0); //second tween move image

    var slideParallaxScene = new ScrollMagic.Scene({ //moving back ground
        triggerElement: '.bcg-parallax',
        triggerHook: 0,
        duration: '100%'
    })

        .setTween(parallaxTl)//starts at -50% then moves to origional 0. look as css of .bcg\. look at greensock101 to learn this. this is the basic from tween
        .addTo(controller);


    //==================Scene IntroMove==================
    //movement of intro heading on scroll
    var introHeadingTween = TweenMax.to('#intro-heading', .01, { opacity: '0' });

    var introHeadingScene = new ScrollMagic.Scene({
        triggerElement: '#introTrigger',//use ID (#project01 img) of div for a single trigger or use this when in a loop
        duration: '60%', //pixels. can also we % of view port
        triggerHook: 0, //1 bottom of page. 0 is top of page. left blannk is middle
        reverse: true //animation will only happen once
    })
        .setTween(introHeadingTween)
        .setPin('#intro-heading', { pushFollowers: true })
        //.setClassToggle('#intro-heading', 'fade-out')

        //indicators
        .addIndicators({
            //create dif labels for triggers
            name: 'intro heading fade',
            colorTrigger: 'pink',
            indent: 300,
            colorStart: 'green',
            colorEnd: 'purple'
        }) //this requires a plugin

        .addTo(controller);

    //==================Scene Logo Entrance==================
    var introLogoTween = TweenMax.from('#intro-logo', 1, { top: '20vh', opacity: 0, ease: Power1.easeOut });
    var introLogoScene = new ScrollMagic.Scene({})
        .setTween(introLogoTween)

        .addTo(controller);
    //==================Scene NavigationPin==================
    var navPinTween = new TimelineMax();
    navPinTween
        .to('#nav', .2, { backgroundColor: 'rgba(255,255,255,.5)' })
        .to('.navFont', .1, { color: 'black' })
        .to('.navLeft', 0, { opacity: '1' }, '-=.15');

    var pinNavigationScene = new ScrollMagic.Scene({
        triggerElement: '#nav',
        duration: $(window),
        triggerHook: 0
    })


        .setTween(navPinTween)
        .setPin('#nav', { pushFollowers: true })


        .addIndicators({
            //create dif labels for triggers
            name: 'Nav Pin',
            colorTrigger: 'blue',
            //indent: 200,
            colorStart: 'blue',
            colorEnd: 'purple'
        }) //this requires a plugin

        .addTo(controller);

    //==================Scene BackgroundPin==================
    var BackgroundPinTween = new TimelineMax();


    var pinBackGroundScene = new ScrollMagic.Scene({
        triggerElement: '#bodyBackground',
        duration: $(window),
        triggerHook: 0
    })


        .setTween(BackgroundPinTween)
        .setPin('#bodyBackground', { pushFollowers: true })


        .addIndicators({
            //create dif labels for triggers
            name: 'Nav Pin',
            colorTrigger: 'blue',
            //indent: 200,
            colorStart: 'white',
            colorEnd: 'red'
        }) //this requires a plugin

        .addTo(controller);



    //==================Scene AboutME==================
    var profileImg = new TimelineMax(); 
    profileImg
        
        .from('#aboutMe-img', .3, { x: '-25%', opacity: '0', ease: Power0.easeNone }, 0)
        .from('#aboutMe_intro', .3, { x: '25%', opacity: '0', ease: Power0.easeNone }, 0)
        .from('#aboutMe_content > p', .3, { y: '15%', opacity: '0', ease: Power0.easeNone }, .5); 

    var slideParallaxScene = new ScrollMagic.Scene({ 
        triggerElement: '#aboutMe_container',
        triggerHook: .3
    })

        .setTween(profileImg)
        .addTo(controller);

    //==================Experience Portfolio==================
    var experienceList = new TimelineMax();
    experienceList

        .from('#skills_list', .3, { y: '20%', opacity: '0', ease: Power0.easeNone }, 0)
        .from('#resume_content > h1 > span', .3, { y: '-75%', opacity: '0', ease: Power0.easeNone }, .1 );

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '#resume_container',
        triggerHook: .3
    })

        .setTween(experienceList)
        .addTo(controller);

    
    //===TimeLine===
    var experienceTimeLine = new TimelineMax();
    experienceTimeLine

        .from('#timeLine_left_outer', .5, { x: '-50%', opacity: '0', ease: Power0.easeNone }, 0)
        .from('#timeLine_right_outer', .5, { x: '50%', opacity: '0', ease: Power0.easeNone }, 0);

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '#skills_list',
        triggerHook: -0.5
    })

        .setTween(experienceTimeLine)
        .addTo(controller);

    //==================Scene Portfolio==================
    var portfolioProjects = new TimelineMax();
    portfolioProjects

        .from('#card', .3, { y: '20%', opacity: '0', ease: Power0.easeNone }, 0)
        .from('#card2', .3, { y: '20%', opacity: '0', ease: Power0.easeNone }, .1)
        .from('#card3', .3, { y: '20%', opacity: '0', ease: Power0.easeNone }, .2);

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '#Projects_container',
        triggerHook: .3
    })

        .setTween(portfolioProjects)
        .addTo(controller);


    //==================Contact Portfolio==================
    var Contact = new TimelineMax();
    Contact

        .from('#Contact_content > div', .3, { y: '20%', opacity: '0', ease: Power0.easeNone }, 0)
        .from('#contact_container > div:nth-child(2)', .3, { y: '20%', opacity: '0', ease: Power0.easeNone }, 1);

    var slideParallaxScene = new ScrollMagic.Scene({
        triggerElement: '#contact_container',
        triggerHook: .3
    })

        .setTween(Contact)
        .addTo(controller);




            

})