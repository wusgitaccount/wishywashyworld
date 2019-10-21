//alert('hello!');

$("#page-wrap").wrapInner("<table cellspacing='30'><tr>");
$(".ww-page").wrap("<td></td>");
$("body").mousewheel(function(event, delta) {
		this.scrollLeft -= delta * 30;
		event.preventDefault();
			});
