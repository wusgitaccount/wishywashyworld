//alert('hello!');

$("#page-wrap").wrapInner("<table cellspacing='0'><tr>");
$(".ww-page").wrap("<td></td>");
$("body").mousewheel(function(event, delta) {
		this.scrollLeft -= delta * 30;
		event.preventDefault();
			});

$(document).ready(function () {
	$(".draggy").resizable();
});
