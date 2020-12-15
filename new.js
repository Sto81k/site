
       	  
   		  window.onload = function(){
   		  	var topDoBlocka = 0;
   		  	$('html, body').animate({
              scrollTop: topDoBlocka 
       	  }, 9);
   		  
}

/*
       window.onload = function(){
       	const form = $('.FORM');
       }

		document.addEventListener('DOMContentLoaded', function(){	
   		  const form = $('.FORM');
   		  $('.DopolnitelText').click(function(event){
   		  		event.preventDefault();

   		  		let formData = new FormData(form);

   		  		$('.FORM').addClass('_sending');
   		  		
   		  		let response = await fetch('sendmail.php', {
                   method: 'POST',
                   body: formData
   		  		});
   		  		if (response.ok) {
   		  			let result = await response.json();
   		  			alert(result.message);
   		  			formPreview.innerHTML = '';
   		  			form.reset();
   		  			$('.FORM').removeClass('_sending');
   		  		}  else {
   		  			alert("Ошибка");
   		  			$('.FORM').removeClass('_sending');
                }
            });
   		  });

          */
           		  

       	  

      $('.ObcaaZamazkaTovar').css('display', 'none');
      $('.ZakazatTovar1').css('display', 'none');


       window.addEventListener('scroll', progresBar);

       function progresBar(e){
          
       let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
       //let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
       
       //let progresOtstup = windowScroll / windowHeight * 100 + '%';
       console.log(windowScroll);

       //$('.menublock').css('top', progresOtstup);
       if (windowScroll >= 631) {
       	$('.HeadOdhranichitel').css('display', 'inline-block');
       }

       if (windowScroll <= 631) {
       	$('.HeadOdhranichitel').css('display', 'none');
       }
       }



       $('.Tovar1').click(function(){
       		$('.ObcaaZamazkaTovar').css('display', 'inline-block');	
       		$('.ZakazatTovar1').css('display', 'inline-block');	
            


            $('.HeadOdhranichitel').css('display', 'none');
       		var topDoBlocka = 100;
   		  	$('html, body').animate({
              scrollTop: topDoBlocka 
       	  }, 9);

   		  $('.GlobalPreimushestvo').css('display', 'none');
   		  $('.GLOBALL_5tochka').css('display', 'none');
   		  $('.CONTENT').css('height', '1010px');
   		  $('.body').css('height', '1710px');

		  $('.body').css('margin-top', '-500px');

       		/*$('<div class="ObcaaZamazkaTovar"></div>').insertAfter('.head');
       		$('<div class="ZakazatTovar1"></div>').insertAfter('.head');
       		$('<div class="VuhodSZakazatTovar1"><div class="VuhodCherta1"></div><div class="VuhodCherta2"></div> </div>').insertAfter('.head');
            $('<div class="DemonstrachiaTovar1"></div>').insertAfter('.head');

       		$('.HeadOdhranichitel').remove();
       		var topDoBlocka = 100;
   		  	$('html, body').animate({
              scrollTop: topDoBlocka 
       	  }, 9);

   		  $('.GlobalPreimushestvo').remove();
   		  $('.GLOBALL_5tochka').remove();
   		  $('.CONTENT').css('height', '1010px');
   		  $('.body').css('height', '1710px');

		  $('.body').css('margin-top', '-500px');*/	   		  

       });


       $('.VuhodSZakazatTovar1').click(function(){
       		$('.ObcaaZamazkaTovar').css('display', 'none');	
       		$('.ZakazatTovar1').css('display', 'none');	


            
            $('.HeadOdhranichitel').css('display', 'inline-block');
       		var topDoBlocka = 0;
   		  	$('html, body').animate({
              scrollTop: topDoBlocka 
       	  }, 9);

   		  $('.GlobalPreimushestvo').css('display', 'inline-block');
   		  $('.GLOBALL_5tochka').css('display', 'inline-block');
   		  $('.CONTENT').css('height', '2200px');
   		  $('.body').css('height', '3980px');

		  $('.body').css('margin-top', '0px');


       		/*$('.ObcaaZamazkaTovar').remove();
       		$('.ZakazatTovar1').remove();
       		$('.VuhodSZakazatTovar1').remove();
       		$('.VuhodCherta1').remove();
       		$('.VuhodCherta2').remove();
            $('.DemonstrachiaTovar1').remove();


            $('<div class="HeadOdhranichitel"></div>').insertAfter('.head');
       		
       		var topDoBlocka = 0;
   		  	$('html, body').animate({
              scrollTop: topDoBlocka 
       	  }, 9);


   		  	$('<div class="GlobalPreimushestvo"></div>').insertAfter('.head');
   		  	$('<div class="GLOBALL_5tochka"></div>').insertAfter('.head');
   		  $('.CONTENT').css('height', '2200px');
   		  $('.body').css('height', '3980px');

		  $('.body').css('margin-top', '0px');*/
       });







/*========================================*/
/*========================================*/


    
       $(".Foto1Tovar1").mousemove(function(){
       	    $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto1Tovar1').mouseout(function(){  
           
           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
       		$(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto2Tovar2").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });



/*========================================*/
/*========================================*/



            $(".Foto2Tovar2").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto2Tovar2').mouseout(function(){  

           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });



           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
       		$(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto1Tovar1").mousemove(function(){ 	
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });

           $(".Foto3Tovar3").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });



/*========================================*/
/*========================================*/



       $(".Foto3Tovar3").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto3Tovar3').mouseout(function(){  

       	   $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });	


           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
       		$(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto2Tovar2").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });

           $(".Foto4Tovar4").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
            });
       });
       


/*========================================*/
/*========================================*/




       $(".Foto4Tovar4").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
	

       });
       $('.Foto4Tovar4').mouseout(function(){  

           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });

 

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
       		$(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto3Tovar3").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });










/*===========================================================================*/
/*===========================================================================*/










			$('.Foto2Tovar2').click(function(){



    
       $(".Foto1Tovar1").mousemove(function(){
       	    $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto1Tovar1').mouseout(function(){  
           
           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto2Tovar2").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });



});
$('.Foto2Tovar2').click(function(){





       $(".Foto3Tovar3").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto3Tovar3').mouseout(function(){  

       	   $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });	


           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto2Tovar2").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });

           $(".Foto4Tovar4").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
            });
       });
       



});
$('.Foto2Tovar2').click(function(){





       $(".Foto4Tovar4").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
	

       });
       $('.Foto4Tovar4').mouseout(function(){  

           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });

 

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto3Tovar3").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });




});
$('.Foto2Tovar2').click(function(){





       		$(".Foto2Tovar2").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto2Tovar2').mouseout(function(){  

           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });



           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto1Tovar1").mousemove(function(){ 	
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });

           $(".Foto3Tovar3").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });
       });














/*===========================================================================*/
/*===========================================================================*/














			$('.Foto1Tovar1').click(function(){



    
       $(".Foto1Tovar1").mousemove(function(){
       	    $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto1Tovar1').mouseout(function(){  
           
           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
       		$(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto2Tovar2").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });



});
$('.Foto1Tovar1').click(function(){





       $(".Foto3Tovar3").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto3Tovar3').mouseout(function(){  

       	   $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });	


           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
       		$(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto2Tovar2").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });

           $(".Foto4Tovar4").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
            });
       });
       



});
$('.Foto1Tovar1').click(function(){





       $(".Foto4Tovar4").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
	

       });
       $('.Foto4Tovar4').mouseout(function(){  

           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });

 

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
       		$(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto3Tovar3").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });




});
$('.Foto1Tovar1').click(function(){





       		 $(".Foto2Tovar2").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto2Tovar2').mouseout(function(){  

           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });



           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
       		$(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto1Tovar1").mousemove(function(){ 	
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });

           $(".Foto3Tovar3").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });
       });





	






/*===========================================================================*/
/*===========================================================================*/














			$('.Foto3Tovar3').click(function(){



    
       $(".Foto1Tovar1").mousemove(function(){
       	    $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto1Tovar1').mouseout(function(){  
           
           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto2Tovar2").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });



});
$('.Foto3Tovar3').click(function(){





       $(".Foto3Tovar3").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto3Tovar3').mouseout(function(){  

       	   $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto2Tovar2").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });

           $(".Foto4Tovar4").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
            });
       });
       



});
$('.Foto3Tovar3').click(function(){





       $(".Foto4Tovar4").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
	

       });
       $('.Foto4Tovar4').mouseout(function(){  

           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto3Tovar3").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });




});
$('.Foto3Tovar3').click(function(){





       		 $(".Foto2Tovar2").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto2Tovar2').mouseout(function(){  

           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            
            });

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
         
            });

            
           $(".Foto1Tovar1").mousemove(function(){ 	
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });

           $(".Foto3Tovar3").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });
       });	












/*===========================================================================*/
/*===========================================================================*/















			$('.Foto4Tovar4').click(function(){



    
       $(".Foto1Tovar1").mousemove(function(){
       	    $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto1Tovar1').mouseout(function(){  
           
           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
            
            });

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
         
            });

            
           $(".Foto2Tovar2").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });



});
$('.Foto4Tovar4').click(function(){





       $(".Foto3Tovar3").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto3Tovar3').mouseout(function(){  

       	   $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
            
            });

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
         
            });

            
           $(".Foto2Tovar2").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });

           $(".Foto4Tovar4").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
            });
       });
       



});
$('.Foto4Tovar4').click(function(){





       $(".Foto4Tovar4").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
	

       });
       $('.Foto4Tovar4').mouseout(function(){  

           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
            
            });

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
         
            });

            
           $(".Foto3Tovar3").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });




});
$('.Foto4Tovar4').click(function(){





       		 $(".Foto2Tovar2").mousemove(function(){
       	    $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").addClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").addClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
	

       });
       $('.Foto2Tovar2').mouseout(function(){  

           $(".DemonstrachiaTovar1").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
            
            });

           $(".GLOBAL_dopomogZakladka").mousemove(function(){
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").addClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").addClass('active');
         
            });

            
           $(".Foto1Tovar1").mousemove(function(){ 	
            $(".Foto1Tovar1").removeClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").removeClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").removeClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").removeClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });

           $(".Foto3Tovar3").mousemove(function(){ 	
            $(".Foto1Tovar1").addClass('pogano');
       		$(".Foto2Tovar2").removeClass('active');
       		$(".Foto3Tovar3").addClass('active');
       		$(".Foto4Tovar4").removeClass('active');
       		$(".Foto1Tovar1Vidno").addClass('active');
       		$(".Foto2Tovar2Vidno").removeClass('active');
       		$(".Foto3Tovar3Vidno").addClass('active');
	        $(".Foto4Tovar4Vidno").removeClass('active');
            });
       });
       });	



			