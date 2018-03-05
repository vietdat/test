$(document).ready(function() {
      $('#mobile-menu span').click(function(event) {
      if($('#mobile-menu').hasClass('active-menu')) {
        $('#mobile-menu').removeClass('active-menu');
        $('#mobile-menu ul').fadeOut(300);
      }else{
        $('#mobile-menu').addClass('active-menu');
        $('#mobile-menu ul').fadeIn(300);
      };  
    });
    $('#mobile-menu ul li').click(function(event) {
        $('#mobile-menu ul li').removeClass('active');
        $(this).addClass('active');
        $('#mobile-menu').removeClass('active-menu');
        $('#mobile-menu ul').css({'display':'none'});
    });
    $('.section').click(function(event) {
        $('#mobile-menu').removeClass('active-menu');
        $('#mobile-menu ul').css({'display':'none'});
    });
    $('.loading').delay(3000).slideUp(500);
    function logoout(){
      setTimeout(function(){
        $('.frame').delay(1000).fadeOut(0);
        $('#logo1').delay(1000).fadeIn(500);
        
        $('#slogan1').delay(1500).animate({'opacity': 1}, 1000);
      },8500);
       setTimeout(function(){              
        $('#bg').animate({'left': 0},4000);        
      },4500);
    }
    logoout();

    $("#slide").owlCarousel({
      items : 1,
      pagination:false,
      navigation : true,
      navigationText : ["",""],
      rewindNav : true,
      scrollPerPage : false,
      responsive:true,
      autoPlay:3000,
      bottom:true
    });
      var change;
      var change1;
      var change2;
      function autoChange() {
        change = setTimeout(function(){     
        $('.butterfly').animate ({
          'top':'23%',
          'left':'30%'
        },{
            step: function(now,fx) {
              //$(this).css('transform','rotate('+now+'deg)');  
            },
            duration:6000
           
        },2000)},3500);
      };
      $('.blue').hide();
      function autoChange1() {
        
        setTimeout(function(){
          $('.blue').show();
        },3500);
        
        change1 = setTimeout(function(){                 
          $("a[href='#second']").get(0).click();
        },12000);
      }
      function stopChange1() {
          clearTimeout(change1);
      } 
      function stopChange() {        
          clearTimeout(change);
      } 
      //autoChange();
      autoChange1();
      $(window).load(function(){
        $('#myVideo').css('display','none');
      });
      
      $('#fullpage').fullpage({
        anchors: ['first', 'second', 'third','4th','5th','6th','7th','8th','last'],
        menu: '#menu',
        loopTop: true,
        loopBottom: true,
        navigation: true,
        navigationPosition: 'right',
        verticalCentered: true,
        afterLoad: function(anchorLink, index){
          
          if(anchorLink == 'first'||anchorLink == 'second'||anchorLink == 'third'||anchorLink == 'last'){
            $('#menu').animate({'left':'-220px', 'top': '70px','opacity':0}, 500);
            $('#mobile-menu span').animate({'right':'-50px'}, 500);
          }else{
            $('#menu').animate({'left':'20px', 'top': '70px','opacity':1}, 500);
            $('#mobile-menu span').animate({'right':0}, 500);
          }
          if(anchorLink == 'first'||anchorLink == 'last'){
            $('.slogan').animate({'left': '20', 'top': '-100px'}, 500);
          }else{$('.slogan').animate({'left': '20px', 'top': '20px','opacity':'1'}, 500);}
          if(anchorLink == 'first'){
            $('.fixbt.next').animate({'bottom': 0}, 500);
            $('.fixbt.next a').attr('href','#second');
            $('.fixbt.ct').animate({'bottom': '-62px'}, 500);
            autoChange1();
           
          }else if(anchorLink == 'second'){
            $('.fixbt.next').animate({'bottom': 0}, 500);
            $('.fixbt.next a').attr('href','#third');
            $('.fixbt.ct').animate({'bottom': '-62px'}, 500);
            $('#myVideo').show();
            $('#myVideo')[0].play();
            $('#myVideo').bind("ended",function(){
             $("a[href='#third']").get(0).click();
            });
            stopChange1();
            
          }else if(anchorLink == 'third'){
            $('.fixbt.next').animate({'bottom': 0}, 500);
            $('.fixbt.next a').attr('href','#4th');
            $('.fixbt.ct').animate({'bottom': '-62px'}, 500);     
            stopChange1();
          }else if(anchorLink == 'last'){
            $('.fixbt').animate({'bottom':'-62px'}, 500);
            stopChange1();
          }else{
            stopChange1();
            $('.fixbt.next').animate({'bottom':'-62px'}, 500);
            $('.fixbt.ct').animate({'bottom': 0}, 500);
            $('.product').animate({'bottom':'20%','opacity':'1'}, 500)
          }
          if(anchorLink == 'third') {
            $('#section2 .imgleft').animate({'left':'10%','opacity':'1'}, 500,function(){ 
              setInterval(function(){$(".herspace").effect( "bounce", {times:2}, 300 );}, 2000);
            });
          }
          if(anchorLink != 'first') {
            stopChange(); 
          }
          if(anchorLink != 'second') {
            $('#myVideo')[0].pause();
          }
          if(anchorLink == '4th') {
            $('#mobile-menu ul li').removeClass('active');
            $('#mobile-menu ul li:nth-of-type(1)').addClass('active');
          }else if(anchorLink == '5th'){
            $('#mobile-menu ul li').removeClass('active');
            $('#mobile-menu ul li:nth-of-type(2)').addClass('active');
          }else if(anchorLink == '6th'){
            $('#mobile-menu ul li').removeClass('active');
            $('#mobile-menu ul li:nth-of-type(3)').addClass('active');
          }else if(anchorLink == '7th'){
            $('#mobile-menu ul li').removeClass('active');
            $('#mobile-menu ul li:nth-of-type(4)').addClass('active');
          }else if(anchorLink =='8th'){
            $('#mobile-menu ul li').removeClass('active');
            $('#mobile-menu ul li:nth-of-type(5)').addClass('active');
          }
        },
        afterRender: function(anchorLink){
        
        },onLeave: function(anchorLink){
          $('#section2 .imgleft').animate({'left':'0','opacity':'0'}, 500); 
          $('.product').css({'bottom':'0','opacity':'0'});
          $('#myVideo').fadeOut(500);
          

        }
      });

});			
