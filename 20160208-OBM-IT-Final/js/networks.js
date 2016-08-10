var controller;

$(function() {

	$(".brands-body").mousewheel(function(event, delta) {

		this.scrollLeft -= (delta*30 );
		
	});

	controller = new ScrollMagic.Controller({vertical: false});


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