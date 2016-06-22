//**********************************BUTTON-MENU******************************************************
$(function() {
  var pull = $('.hidden-button');
      menu = $('nav ul');
      menuHeight = menu.height();
  $(pull).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle();
  });

});
$(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});


//*************************************  PROGRESS BAR*******************************************************

(function($){
$(document).ready(function(){  
    $('#circle-1').css({'border':'4px solid #5ecca7'})
    $('#uw-1 #innam').css({'color':'#5ecca7'})
    $('#line-1').css({'background-color':'#5ecca7','width':'15%'})
    $('.about-1').slideDown()      
    $('#circle-1').on("click",function(){
        $(this).toggleClass('actives-c1')
        if($(this).hasClass('actives-c1')){
           $('.about-1').slideDown()       
           $('#circle-2.actives-c2').click()
           $('#circle-3.actives-c3').click()
           $('#circle-4.actives-c4').click()
           $('#circle-5.actives-c5').click()
        }
        else
        {
           $(this).css({'border':'4px solid #5ecca7'})
           $('#uw-1 #innam').css({'color':'#5ecca7'})
           $('#line-1').css({'background-color':'#5ecca7','width':'15%'})
           $('#circle-2.actives-c2').click()
           $('#circle-3.actives-c3').click()
           $('#circle-4.actives-c4').click()
           $('#circle-5.actives-c5').click()
        }        
    })
    $('#circle-2').on("click",function(){
        $(this).toggleClass('actives-c2')
        if($(this).hasClass('actives-c2')){
           $(this).css({'border':'4px solid #5ecca7'})
           $('#uw-2 #innam').css({'color':'#5ecca7'})
           $('#line-1').css({'background-color':'#5ecca7','width':'100%'})
           $('.about-1').slideUp()
           $('.about-3').slideUp()
           $('.about-2').slideDown()
        }
        else
        {
           $(this).css({'border':'4px solid #5ecca7'})
           $('#circle-3.actives-c3').css({'border':'4px solid #5ecca7'})
           $('#uw-2 #innam').css({'color':'#5ecca7'})
           $('#line-1').css({'background-color':'#5ecca7','width':'15%'})
           $('#circle-3.actives-c3').click()
           $('#circle-4.actives-c4').click()
           $('#circle-5.actives-c5').click()
           $('.about-2').slideUp()
           $('.about-3').slideUp()
           $('.about-4').slideUp()
           $('.about-5').slideUp()
           $('.about-1').slideDown()   
        }  
    })
    $('#circle-3').on("click",function(){
        $(this).toggleClass('actives-c3')
        if($(this).hasClass('actives-c3')){
           $(this).css({'border':'4px solid #5ecca7'})
           $('#uw-3 #innam').css({'color':'#5ecca7'})
           $('#line-2').css({'background-color':'#5ecca7','width':'100%'})
           $('.about-3').slideDown()
           $('.about-2').slideUp()
           $('.about-1').slideUp()  
        }
        else
        {
           $(this).css({'border':'4px solid #5ecca7'})
           $('#uw-3 #innam').css({'color':'#5ecca7'})
           $('#line-2').css({'background-color':'#5ecca7','width':'0%'})
           $('#circle-3.actives-c3').click()
           $('#circle-4.actives-c4').click()
           $('#circle-5.actives-c5').click()
           $('.about-3').slideUp()
           $('.about-4').slideUp()
           $('.about-5').slideUp()
           $('.about-2').slideDown()
           
        }
    }) 
    $('#circle-4').on("click",function(){
        $(this).toggleClass('actives-c4')
        if($(this).hasClass('actives-c4')){
           $(this).css({'border':'4px solid #5ecca7'})
           $('#uw-4 #innam').css({'color':'#5ecca7'})
           $('#line-3').css({'background-color':'#5ecca7','width':'100%'})
           $('.about-4').slideDown()
           $('.about-3').slideUp()
           $('.about-2').slideUp()
           $('.about-1').slideUp()
        }
        else
        {
           $(this).css({'border':'4px solid #5ecca7'})
           $('#uw-4 #innam').css({'color':'#5ecca7'})
           $('#line-3').css({'background-color':'','width':'0%'})
           $('.t-cont-3').slideDown()      
           $('#circle-5.actives-c5').click()
           $('.about-4').slideUp()
           $('.about-5').slideUp()

        }
    })  
    $('#circle-5').on("click",function(){
        $(this).toggleClass('actives-c5')
        if($(this).hasClass('actives-c5')){
           $(this).css({'border':'4px solid #5ecca7'})
           $('#uw-5 #innam').css({'color':'#5ecca7'})
           $('#line-4').css({'background-color':'#5ecca7','width':'100%'})
           $('.about-5').slideDown()
           $('.about-4').slideUp()
           $('.about-3').slideUp()
           $('.about-2').slideUp()
           $('.about-1').slideUp()
        }
        else
        {
           $(this).css({'border':'4px solid #5ecca7'})
           $('#uw-5 #innam').css({'color':'#5ecca7'})
           $('#line-4').css({'background-color':'','width':'0%'})
           $('.about-5').slideUp()
           $('.about-4').slideDown()     
        }
    });   
})
}(jQuery))


//Кнопка "Наверх"
//Документация:
$(document).ready(function(){  
    $(".footer-button").click(function () {
    $("body, html").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });  
});


//Плавный скролл до блока .div по клику на .scroll
//Документация: http://webcomplex.com.ua/jquery/plavnyj-skroll-posle-nazhatiya-na-yakornuyu-ssylku.html
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});
