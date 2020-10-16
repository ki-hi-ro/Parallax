$(function(){

    var target1 = $("#parallax-01"),
        targetPosOT1 = target1.offset().top,
        targetFactor = 0.5,
        windowH = $(window).height(),
        scrollYStart1 = targetPosOT1 - windowH;

    $(window).on('scroll',function(){

      var scrollY = $(this).scrollTop();

      if(scrollY > scrollYStart1){
        target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
      } else {
        target1.css('background-position','center top');
      }
      
    });

  });
  