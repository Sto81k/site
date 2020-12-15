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