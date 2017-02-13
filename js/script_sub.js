$(document).ready(function () {
    $('#main').fadeIn(1000);
    $(".blackOut").click(function () {

        event.preventDefault();

        //if staement for each block
        var btnID = $(this).attr('id');
        //alert(btnID);
        if (btnID === 'home') {
            newLocation = '/';
        } else if (btnID === 'aboutMe') {
            newLocation = '/#aboutMe_container';
        } else if (btnID === 'experience') {
            newLocation = '/#resume_container';
        } else if (btnID === 'portfolio') {
            newLocation = '/#Projects_container';
        } else if (btnID === 'contact') {
            newLocation = '/#contact_container';
        } else {
            alert('Something went wrong! Refresh page and try again');
        }
        

        $('#main').fadeOut(1000, newpage);


        function newpage() {

            window.location = newLocation;
        }

    });
    //==========================Mobile Navigation================
    
    //Click menu button
    $(".mobileShow").click(function () {
        /* Open when someone clicks on the span element */
        if ($(".overlay").css("bottom") != "0vh") {
            $(".overlay").css({ bottom: "0vh" });
            $("body").css({ overflow: "hidden" });

        }

        if ($(".overlay").css("bottom") === "0px") {
            $(".overlay").css({ bottom: "-100vh" });
            $("body").css({ overflow: "initial" });
        }
    })

    //Click any link
    $(".navFontOverlay").click(function () {
        $(".overlay").css({ bottom: "-100vh" });
        $("body").css({ overflow: "initial" });
    })

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


})