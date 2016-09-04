$(document).ready(function() {


	$(".small_mnu_button").click(function() {
	        $(".top-mnu ul").slideToggle();
	    });

	$('.blue').click(function(){
		$(this).css({'border':'2px solid blue'}).siblings().css({'border':'2px solid #000'});
		$('.bg-img').css({'background-image':'url(img/BG-blue.jpg)'});
		$('.button-header').css({'background':'blue','border':'1px outset #7fb4da'});
		$('.button-tabs').css({'background':'blue','border':'1px outset #7fb4da'});
		$('.button-pull').css({'background':'blue','border':'1px outset #7fb4da'});
		$('.button-photos').css({'background':'blue','border':'1px outset #7fb4da'});
		$('.button-videos').css({'background':'blue','border':'1px outset #7fb4da'});
		$('header h1').css({'color':'#fff'});
		$('header p').css({'color':'#91bcce'});
		$('head').append("<style>.news-feed li:nth-of-type(3):before {border-right: 12px solid blue; }</style>");
		$('head').append("<style>.news-feed span {background-image: url(img/blind-blue.png);}</style>");
		$('head').append("<style>.news-feed li:nth-of-type(3) a{background-color: blue;}</style>");
		$('head').append("<style>.news-feed li:nth-of-type(1) a{background: #00004c;}</style>");
		$('head').append("<style>.news-feed a:hover {background: blue;}</style>");
		$('head').append("<style>.news-feed a {background: #00009b;}</style>");
	});

	$('.red').click(function(){
		$(this).css({'border':'2px solid red'}).siblings().css({'border':'2px solid #000'});
		$('.bg-img').css({'background-image':'url(img/bg.jpg)'});
		$('.button-header').css({'background':'#b80000','border':'1px outset #c00008'});
		$('.button-tabs').css({'background':'#b80000','border':'1px outset #c00008'});
		$('.button-pull').css({'background':'#b80000','border':'1px outset #c00008'});
		$('.button-photos').css({'background':'#b80000','border':'1px outset #c00008'});
		$('.button-videos').css({'background':'#b80000','border':'1px outset #c00008'});
		$('header h1').css({'color':'#fff'});
		$('header p').css({'color':'#9a6f74'});
		$('head').append("<style>.news-feed li:nth-of-type(3):before {border-right: 12px solid #c60000; }</style>");
		$('head').append("<style>.news-feed span {background-image: url(img/blind.png);}</style>");
		$('head').append("<style>.news-feed li:nth-of-type(3) a{background-color: #b80000;}</style>");
		$('head').append("<style>.news-feed li:nth-of-type(1) a{background: #460000;}</style>");
		$('head').append("<style>.news-feed a:hover {background: #c60000;}</style>");
		$('head').append("<style>.news-feed a {background: #840000;}</style>");
	});

	$('.green').click(function(){
		$(this).css({'border':'2px solid green'}).siblings().css({'border':'2px solid #000'});
		$('.bg-img').css({'background-image':'url(img/BG-green.jpg)'});
		$('.button-header').css({'background':'green','border':'1px outset #25ff01'});
		$('.button-tabs').css({'background':'green','border':'1px outset #25ff01'});
		$('.button-pull').css({'background':'green','border':'1px outset #25ff01'});
		$('.button-photos').css({'background':'green','border':'1px outset #25ff01'});
		$('.button-videos').css({'background':'green','border':'1px outset #25ff01'});
		$('head').append("<style>.news-feed li:nth-of-type(3):before {border-right: 12px solid green; }</style>");
		$('head').append("<style>.news-feed span {background-image: url(img/blind-green.png);}</style>");
		$('head').append("<style>.news-feed li:nth-of-type(3) a{background-color: green;}</style>");
		$('head').append("<style>.news-feed li:nth-of-type(1) a{background: #022300;}</style>");
		$('head').append("<style>.news-feed a:hover {background: green;}</style>");
		$('head').append("<style>.news-feed a {background: #006b14;}</style>");
		$('header h1').css({'color':'#25ff01'});
		$('header p').css({'color':'#19b200'});
	});

});

