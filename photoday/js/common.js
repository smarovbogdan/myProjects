$(document).ready(function() {

//--------------------PROGRESSBAR----------------------------
//-----------------------------------------------------------
	
    $('#circul-1').css({'border':'4px solid #31aff5'})
   $('#line-1').css({'background-color':'#31aff5','width':'15%'})
   $('#uw-1 #innam').css({'color':'#31aff5'})
   $('.t-cont-1').slideDown()

   $('#circul-1').on("click",function(){
       $(this).toggleClass('actives-c1')
       if($(this).hasClass('actives-c1')){

         $('#uw-1 #innam').css({'color':'#31aff5'})
         $('#uw-5 #innam').css({'color':'#9887ef'})
         $('#uw-2 #innam').css({'color':'#9887ef'})
         $('#uw-3 #innam').css({'color':'#9887ef'})
         $('#uw-4 #innam').css({'color':'#9887ef'})

          $('.t-cont-1').slideDown()
          $('.t-cont-2').slideUp()
          $('.t-cont-3').slideUp()
          $('.t-cont-4').slideUp()
          $('.t-cont-5').slideUp()

          $('#line-1').css({'background-color':'#31aff5','width':'15%'})
          $('#line-2').css({'background-color':'#31aff5','width':'0'})
          $('#line-3').css({'background-color':'#31aff5','width':'0'})
          $('#line-4').css({'background-color':'#31aff5','width':'0'})

          $('#circul-1').css({'border':'4px solid #31aff5'})
          $('#circul-2').css({'border':'4px solid #a4a4a4'})
          $('#circul-3').css({'border':'4px solid #a4a4a4'})
          $('#circul-4').css({'border':'4px solid #a4a4a4'})
          $('#circul-5').css({'border':'4px solid #a4a4a4'})

		  	$('.hobby').css({'background':'url(img/bg_volleyball.jpg)','background-repeat':'no-repeat','background-size':'cover'})
          	
   }})

   $('#circul-2').on("click",function(){
       $(this).toggleClass('actives-c2')
       if($(this).hasClass('actives-c2')){
          $(this).css({'border':'4px solid #31aff5'})

          $('#uw-2 #innam').css({'color':'#31aff5'})
          $('#uw-1 #innam').css({'color':'#31aff5'})
          $('#uw-5 #innam').css({'color':'#9887ef'})
          $('#uw-3 #innam').css({'color':'#9887ef'})
          $('#uw-4 #innam').css({'color':'#9887ef'})

          $('#line-1').css({'background-color':'#31aff5','width':'100%'})
          $('#line-2').css({'background-color':'#31aff5','width':'0'})
          $('#line-3').css({'background-color':'#31aff5','width':'0'})
          $('#line-4').css({'background-color':'#31aff5','width':'0'})

          $('.t-cont-2').slideDown()
          $('.t-cont-1').slideUp()
          $('.t-cont-3').slideUp()
          $('.t-cont-4').slideUp()
          $('.t-cont-5').slideUp()

          $('#circul-2').css({'border':'4px solid #31aff5'})
          $('#circul-1').css({'border':'4px solid #31aff5'})
          $('#circul-3').css({'border':'4px solid #a4a4a4'})
          $('#circul-4').css({'border':'4px solid #a4a4a4'})
          $('#circul-5').css({'border':'4px solid #a4a4a4'})

             $('.hobby').css({'background':' url(img/bg_chess.jpg)','background-repeat':'no-repeat','background-size':'cover'})

       }
   })


   $('#circul-3').on("click",function(){
       $(this).toggleClass('actives-c3')
       if($(this).hasClass('actives-c3')){
          $(this).css({'border':'4px solid #31aff5'})

          $('#uw-3 #innam').css({'color':'#31aff5'})
          $('#uw-1 #innam').css({'color':'#9887ef'})
          $('#uw-2 #innam').css({'color':'#9887ef'})
          $('#uw-5 #innam').css({'color':'#9887ef'})
          $('#uw-4 #innam').css({'color':'#9887ef'})

          $('#line-2').css({'background-color':'#31aff5','width':'100%'})
          $('#line-1').css({'background-color':'#31aff5','width':'100%'})
          $('#line-3').css({'background-color':'#31aff5','width':'0'})
          $('#line-4').css({'background-color':'#31aff5','width':'0'})

          $('.t-cont-3').slideDown()
          $('.t-cont-2').slideUp()
          $('.t-cont-1').slideUp()
          $('.t-cont-4').slideUp()
          $('.t-cont-5').slideUp()

          $('#circul-3').css({'border':'4px solid #31aff5'})
          $('#circul-1').css({'border':'4px solid #31aff5'})
          $('#circul-2').css({'border':'4px solid #31aff5'})
          $('#circul-4').css({'border':'4px solid #a4a4a4'})
          $('#circul-5').css({'border':'4px solid #a4a4a4'})

 			$('.hobby').css({'background':'url(img/bg_gym.jpg)','background-repeat':'no-repeat','background-size':'cover'})
       }
   })

   $('#circul-4').on("click",function(){
       $(this).toggleClass('actives-c4')
       if($(this).hasClass('actives-c4')){
          $(this).css({'border':'4px solid #31aff5'})

          $('#uw-4 #innam').css({'color':'#31aff5'})
          $('#uw-1 #innam').css({'color':'#9887ef'})
          $('#uw-2 #innam').css({'color':'#9887ef'})
          $('#uw-3 #innam').css({'color':'#9887ef'})
          $('#uw-5 #innam').css({'color':'#9887ef'})

          $('#line-3').css({'background-color':'#31aff5','width':'100%'})
          $('#line-1').css({'background-color':'#31aff5','width':'100%'})
          $('#line-2').css({'background-color':'#31aff5','width':'100%'})
          $('#line-4').css({'background-color':'#31aff5','width':'0'})

          $('.t-cont-4').slideDown()
          $('.t-cont-2').slideUp()
          $('.t-cont-3').slideUp()
          $('.t-cont-1').slideUp()
          $('.t-cont-5').slideUp()

          $('#circul-4').css({'border':'4px solid #31aff5'})
          $('#circul-2').css({'border':'4px solid #31aff5'})
          $('#circul-3').css({'border':'4px solid #31aff5'})
          $('#circul-1').css({'border':'4px solid #31aff5'})
          $('#circul-5').css({'border':'4px solid #a4a4a4'})

          $('.hobby').css({'background':'url(img/bg_book.jpg)','background-repeat':'no-repeat','background-size':'cover'})
       }
   })

   $('#circul-5').on("click",function(){
       $(this).toggleClass('actives-c5')
       if($(this).hasClass('actives-c5')){
          $(this).css({'border':'4px solid #31aff5'})

          $('#uw-5 #innam').css({'color':'#31aff5'})
          $('#uw-1 #innam').css({'color':'#9887ef'})
          $('#uw-2 #innam').css({'color':'#9887ef'})
          $('#uw-3 #innam').css({'color':'#9887ef'})
          $('#uw-4 #innam').css({'color':'#9887ef'})

          $('#line-1').css({'background-color':'#31aff5','width':'100%'})
          $('#line-2').css({'background-color':'#31aff5','width':'100%'})
          $('#line-3').css({'background-color':'#31aff5','width':'100%'})
          $('#line-4').css({'background-color':'#31aff5','width':'100%'})

          $('.t-cont-5').slideDown()
          $('.t-cont-2').slideUp()
          $('.t-cont-3').slideUp()
          $('.t-cont-4').slideUp()
          $('.t-cont-1').slideUp()

          $('#circul-5').css({'border':'4px solid #31aff5'})
          $('#circul-2').css({'border':'4px solid #31aff5'})
          $('#circul-3').css({'border':'4px solid #31aff5'})
          $('#circul-4').css({'border':'4px solid #31aff5'})
          $('#circul-1').css({'border':'4px solid #31aff5'})

            $('.hobby').css({'background':'url(img/bg_web.jpg)','background-repeat':'no-repeat','background-size':'cover'})
       }
   });

//----------------END PROGRESSBAR---------------------------
//-----------------------------------------------------------

//Плавный скролл до блока .div по клику на .scroll
//Документация: http://webcomplex.com.ua/jquery/plavnyj-skroll-posle-nazhatiya-na-yakornuyu-ssylku.html
   $("#header").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();	
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),	
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		  top = $(id).offset().top;	
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
 	 });

   //Кнопка "Наверх"
//Документация:
 $(".button-scrolltop").click(function () {
    $("body, html").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });  

//-------------------------Select--------------------------------

  $('.bgDefault').click(function(){
    $(this).css({'border':'2px solid #b4b4b4'}).siblings().css({'border':'2px solid #000'});
    $('header .mnu-button').css({'color':'#a4a4a4'});
    $('header .mnu-button').css({'box-shadow':'inset 0 0 4px 4px rgba(164,164,164,.7)','border':'1px solid #a4a4a4'});
    $('header nav a').css({'color':'#b4b4b4'});
    $('.my-wall .item span ').css({'color':'#eee'});
    $('.education h2').css({'color':'#eee'});
    $('head').append("<style>.education section a:hover {color: #9e9e9e;}</style>");
    $('head').append("<style>header nav a:hover {box-shadow: 2px 2px 5px #eee;}</style>");
    $('head').append("<style>.hobby h2 {color: #eee;}</style>");
    $('head').append("<style>.hobby .button-scrolltop { background: linear-gradient(to bottom, #333, #000); }</style>");
    $('head').append("<style>.hobby .button-scrolltop:hover {box-shadow: 0 1px 5px #eee;}</style>");
    $('head').append("<style>.contact .icon i {color: #eee;}</style>");
    $('head').append("<style>.contact .icon i:hover {color: #9e9e9e;}</style>");
    $('head').append("<style>.contact .wrapper a {color: #eee;}</style>");
    $('head').append("<style>.contact .wrapper a:hover {color: #9e9e9e;}</style>");
    $('head').append("<style>.contact .wrapper i {color: #eee;}</style>");
    $('head').append("<style>.contact .wrapper h3 {color: #eee;}</style>");
    $('head').append("<style>.hobby .cont h3:hover {box-shadow: 2px 3px 5px #eee;}</style>");
    $('head').append("<style>.hobby .text {color: #eee}</style>");
    $('head').append("<style>.hobby .cont h3 {color: #eee;}</style>");
    $('head').append("<style>.skills .item-skills:hover span {border: 7px solid #616161;}</style>");
    $('head').append("<style>.skills .item-skills:hover p {border-bottom: 2px solid #616161;}</style>");
    var img;
        if(img=document.getElementById("myLogo"))
          img.src="img/logo.png";
  });

  $('.bgBlue').click(function(){
    $(this).css({'border':'2px solid blue'}).siblings().css({'border':'2px solid #000'});
    $('header .mnu-button').css({'color':'#81D4FA'});
    $('header .mnu-button').css({'box-shadow':'inset 0 0 4px 4px rgba(33,150,243,.7)','border':'1px solid #2196F3'});
    $('header nav a').css({'color':'#81D4FA'});
    $('.my-wall .item span ').css({'color':'#00aeff'});
    $('.education h2').css({'color':'#81D4FA'});
    $('head').append("<style>.education section a:hover {color: #00aeff;}</style>");
    $('head').append("<style>header nav a:hover {box-shadow: 2px 2px 5px #03A9F4;}</style>");
    $('head').append("<style>.hobby h2 {color: skyblue;}</style>");
    $('head').append("<style>.hobby .button-scrolltop { background: linear-gradient(to bottom, #0f8edf, #000);}</style>");
    $('head').append("<style>.hobby .button-scrolltop:hover {box-shadow: 0 1px 5px #0f8edf;}</style>");
    $('head').append("<style>.contact .icon i {color: #81D4FA;}</style>");
    $('head').append("<style>.contact .icon i:hover {color: #0f8edf;}</style>");
    $('head').append("<style>.contact .wrapper a {color: #81D4FA;}</style>");
    $('head').append("<style>.contact .wrapper a:hover {color: #0f8edf;}</style>");
    $('head').append("<style>.contact .wrapper i {color: #81D4FA;}</style>");
    $('head').append("<style>.contact .wrapper h3 {color: #81D4FA;}</style>");
    $('head').append("<style>.hobby .cont h3:hover {box-shadow: 2px 3px 5px #0f8edf;}</style>");
    $('head').append("<style>.hobby .text {color: #81D4FA}</style>");
    $('head').append("<style>.hobby .cont h3 {color: #0f8edf;}</style>");
    $('head').append("<style>.skills .item-skills:hover span {border: 7px solid #0f8edf;}</style>");
    $('head').append("<style>.skills .item-skills:hover p {border-bottom: 2px solid #0f8edf;}</style>");
    var img;
      if(img=document.getElementById("myLogo"))
        img.src="img/logo.png";
  });

  $('.bgRed').click(function(){
    $(this).css({'border':'2px solid #1B5E20'}).siblings().css({'border':'2px solid #000'});
    $('header .mnu-button').css({'color':'#97fc00'});
    $('header .mnu-button').css({'box-shadow':'inset 0 0 4px 4px rgba(151,252,0,.8)','border':'1px solid #97fc00'});
    $('header nav a').css({'color':'#97fc00'});
    $('.my-wall .item span').css({'color':'#97fc00'});
    $('.education h2').css({'color':'#2E7D32'});
    $('head').append("<style>.education section a:hover {color: #379229;}</style>");
    $('head').append("<style>header nav a:hover {box-shadow: 2px 2px 5px #97fc00;}</style>");
    $('head').append("<style>.hobby h2 {color: #97fc00;}</style>");
    $('head').append("<style>.hobby .button-scrolltop {background: linear-gradient(to bottom, #379229, #424242);}</style>");
    $('head').append("<style>.hobby .button-scrolltop:hover {box-shadow: 0 1px 5px #2E7D32;}</style>");
    $('head').append("<style>.contact .icon i {color: #97fc00;}</style>");
    $('head').append("<style>.contact .icon i:hover {color: #2E7D32;}</style>");
    $('head').append("<style>.contact .wrapper a {color: #97fc00;}</style>");
    $('head').append("<style>.contact .wrapper a:hover {color: #2E7D32;}</style>");
    $('head').append("<style>.contact .wrapper i {color: #97fc00;}</style>");
    $('head').append("<style>.contact .wrapper h3 {color: #97fc00;}</style>");
    $('head').append("<style>.hobby .cont h3:hover {box-shadow: 2px 3px 5px #2E7D32;}</style>");
    $('head').append("<style>.hobby .text {color: #97fc00}</style>");
    $('head').append("<style>.hobby .cont h3 {color: #2E7D32;}</style>");
    $('head').append("<style>.skills .item-skills:hover span {border: 7px solid #379229;}</style>");
    $('head').append("<style>.skills .item-skills:hover p {border-bottom: 2px solid #379229;}</style>");

    var img;
    if(img=document.getElementById("myLogo"))
      img.src="img/logoGreen.png";
  });
	
//------------------------End Select-----------------------------
//mnu-button
  $(".mnu-button").click(function() {
        $(".top-line ul").slideToggle();
    });




});
