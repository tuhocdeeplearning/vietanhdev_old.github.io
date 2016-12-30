---
layout: null
---
{% include /js/typed.min.js %}
$(document).ready(function(){
	$('*[verlang=vi]').hide();
	var w = window.innerWidth;
	function helloWorld(){
		// Set CSS for .page-heading
		$(".page-heading:first").css({"margin":"0", "padding-top":"15px", "padding-bottom":"15px"})
		$(".page-heading:first").html("<div class='text-editor-wrap'><div class='title-bar'><span class='title'>vietanh@Xmachine</span></div><div class='text-body'>$ <span id='typed'></span></div></div>");
		$("#typed").typed({
			strings: ["Hi!", "I'm a <b>student.</b>", "I'm a <b>blogger.</b>", "I'm a <b>developer.</b>", "I'm <b>Viet Anh.</b><br>$ Nice to meet you!"],
			cursorChar: " ☕",
			typeSpeed: 45,
			callback: function(){
		    	setTimeout(function(){
			        helloWorld();
			    }, 4500);
		    }
		});
	}
	if (w > 370) {
		helloWorld();
	}
});
