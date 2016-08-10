var controller;

$(function() {


	controller = new ScrollMagic.Controller({vertical: false});

	// First scene fading out the main logo
	var t1 = new TimelineMax();
	var tween = t1.to(".big-image-logo", 1.5, {autoAlpha: 0,rotation:0.01, scale: 1.5,ease: Power1.easeInOut, x: 0})
				  
				  
	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: ".big-image-logo", duration: "80%", triggerHook: "onLeave"})
					.setTween(t1)
					.addTo(controller);


//Scene 2
	var t2 = new TimelineMax();
	var tween2 = t2.from(".scene-2-holobox-img", 2.5, { autoAlpha: 0,rotation:0.01, scale:1,ease: Power1.easeInOut, y: -100},"+=1.75")
				  .from(".scene-2-character-img", 2, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, y:-100},"-=1.5")
				  .from(".scene-2-text", 2, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, y: -200},"-=1.5");
	// build scene
	var scene2 = new ScrollMagic.Scene({triggerElement: ".scene-1", duration: "85%", triggerHook: "onLeave"})
					.setTween(t2)
					.addTo(controller);


//Scene 3
	var t3 = new TimelineMax();
	var tween3 = t3.from(".scene-3-holobox-img", 2.5, { autoAlpha: 0,rotation:0.01, scale:1,ease: Power1.easeInOut, y: -100},"+=1.75")
				  .from(".scene-3-character-img", 2, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, y:-100},"-=1.5")
				  .from(".scene-3-text", 2, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, y: -200},"-=1.5");
	// build scene
	var scene3 = new ScrollMagic.Scene({triggerElement: ".scene-2-text", duration: "90%", triggerHook: "onLeave"})
					.setTween(t3)
					.addTo(controller);


					//Scene 4
	var t4 = new TimelineMax();
	var tween4 = t4.from(".scene-4-holobox-img", 2.5, { autoAlpha: 0,rotation:0.01, scale:1,ease: Power1.easeInOut, y: -100},"+=1.75")
				  .from(".scene-4-character-img", 2, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, y:-100},"-=1.5")
				  .from(".scene-4-text", 2, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, y: -200},"-=1.5");
	// build scene
	var scene4 = new ScrollMagic.Scene({triggerElement: ".scene-3-text", duration: "90%", triggerHook: "onLeave"})
					.setTween(t4)
					.addTo(controller);

					//Scene 5
	var t5 = new TimelineMax();
	var tween5 = t5.from(".scene-5-holobox-img", 2.5, { autoAlpha: 0,rotation:0.01, scale:1,ease: Power1.easeInOut, y: -100},"+=1.75")
				  .from(".scene-5-character-img", 2, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, y:-100},"-=1.5")
				  .from(".scene-5-text", 2, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, y: -200},"-=1.5");
	// build scene
	var scene5 = new ScrollMagic.Scene({triggerElement: ".scene-4-text", duration: "90%", triggerHook: "onLeave"})
					.setTween(t5)
					.addTo(controller);


										//Scene 5
	var t6 = new TimelineMax();
	var tween6 = t6.from(".scene-6-video-img", 2.5, { autoAlpha: 0,rotation:0.01, scale:1,ease: Power1.easeInOut, y: -100},"+=1.75")
				  .from(".scene-6-input-div", 2.5, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, x:-100},"-=1.5")
				  .from(".scene-6-sub:nth-child(1)", 2, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, y: -200},"-=1.5");
	// build scene
	var scene6 = new ScrollMagic.Scene({triggerElement: ".scene-5-text", duration: "90%", triggerHook: "onLeave"})
					.setTween(t6)
					.addTo(controller);

										//Scene 5
	var t7 = new TimelineMax();
	var tween7 = t7.from(".big-image-logo-2", 5.5, { autoAlpha: 0,rotation:0.01, scale:1.5,ease: Power1.easeInOut, x: 0})
				  .from(".scene-7-subitem:nth-child(1)", 3, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, x: -200},"-=0.25")
				  .from(".scene-7-subitem:nth-child(2)", 3, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, x: -200},"-=0.5")
				  .from(".scene-7-subitem:nth-child(3)", 3, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, x: -200},"-=0.75")
				  .from(".scene-7-subitem:nth-child(4)", 3, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, x: -200},"-=1")
				  .from(".scene-7-subitem:nth-child(5)", 3, {autoAlpha: 0,rotation:0.01, scale: 1,ease: Power1.easeInOut, x: -200},"-=1.25");
	// build scene
	var scene7 = new ScrollMagic.Scene({triggerElement: ".scene-6-sub:nth-child(1)", duration: "90%", triggerHook: "onLeave"})
					.setTween(t7)
					.addTo(controller);



	// change behaviour of controller to animate scroll instead of jump
	controller.scrollTo(function (newpos) {
		TweenMax.to(window, 2.5, {scrollTo: {x: newpos},ease: Power3.easeOut, x: 0});

		TweenMax.to(".bg-img", 2.5, {left:-newpos/15, ease:Power3.easeOut, x: 0});
		TweenMax.to(".bg-img-2", 3.5, {left:-newpos/5, ease:Power3.easeOut, x: 0});
		TweenMax.to(".bg-img-3", 4.5, {left:-newpos/10, ease:Power3.easeOut, x: 0});


	});

// $('.bg-img').plaxify({"xRange":20,"yRange":20})
// $('.bg-img-2').plaxify({"xRange":60,"yRange":20,"invert":true})
// $('.bg-img-3').plaxify({"xRange":10,"yRange":-20,"invert":true})
// $.plax.enable()

});

	//  bind scroll to anchor links
	$(document).on("click", "a[href^='#']", function (e) {
		var id = $(this).attr("href");
		if ($(id).length > 0) {
			e.preventDefault();

			// trigger scroll
			controller.scrollTo(id);

				// if supported by the browser we can even update the URL.
			// if (window.history && window.history.pushState) {
			// 	history.pushState("", document.title, id);
			// }
		}
	});

$(".submit-btn").on("click",function (e){
//
});


$(function () {
    function showSlide(n) {
        $('body').unbind('mousewheel');
        currSlide += n;
        currSlide = currSlide <= 0 ? 0 : currSlide >= $slide.length - 1 ? $slide.length - 1 : currSlide;
        var displacment = window.innerWidth * currSlide;
        // $('.slides').css('transform', 'translateX(-' + displacment + 'px)');
        controller.scrollTo("#"+(currSlide+1));

        setTimeout(function () {
            $('body').bind('mousewheel', mouseEvent);
        }, 800);

        if(currSlide==0 || currSlide==6){
        	   	$('.menu a > .menuBox.active').removeClass('active');
        	    $('.menu a.active-border').removeClass('active-border');
        		$($('.menu a')[currSlide]).addClass('active-border');
        		if(currSlide==0){
        			$(".arrow-left").hide();
        			$(".arrow-right").show();
        		}else if(currSlide==6){
        			$(".arrow-right").hide();
        			$(".arrow-left").show();
        		}
        }else{
        	    $('.menu a > .menuBox.active').removeClass('active');
        	    $('.menu a.active-border').removeClass('active-border');
        		$($('.menu a > .menuBox')[currSlide-1]).addClass('active');
        		$(".arrow-left").show();
        		$(".arrow-right").show();
        }

    }
    function mouseEvent(e, delta) {
        showSlide(delta >= 0 ? 1 : -1);
        e.preventDefault();
    }
    $('.menu a').click(function (e) {
        var newslide = parseInt($(this).attr('href')[1]);
        var diff = newslide - currSlide - 1;
        showSlide(diff);
        e.preventDefault();
    });
    $('.arrow-left').click(function (e) {
        
		showSlide(-1);
        e.preventDefault();
    });
    $('.arrow-right').click(function (e) {
        
		showSlide(1);
        e.preventDefault();
    });
    $(window).resize(function () {
        var displacment = window.innerWidth * currSlide;
        // $('.slides').css('transform', 'translateX(-' + displacment + 'px)');
        controller.scrollTo(currSlide);
    });
    var currSlide = 0;
    $(".arrow-left").hide();
    var $slide = $('.slide');
    $($('.menu a')[0]).addClass('active-border');
    $('body').bind('mousewheel', mouseEvent);
});