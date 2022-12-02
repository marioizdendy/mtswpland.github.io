// Parallax
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

  // Section animations

  $(window).scroll(function(){
  inViewport();
  });

  $(window).resize(function(){
  inViewport();
  });

  // First app section 2
  function inViewport(){
  $('.animate-me').each(function(){
  var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

  if( divPos < topOfWindow+600 ){
  $(this).addClass('el-show');
  }
  });
  // Second app section 3
  $('.anm_me').each(function(){
  var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

  if( divPos < topOfWindow+500 ){
  $(this).addClass('anm_show');
  }
  });
  // Third app section 4
  $('.section4').each(function(){
  var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

  if( divPos < topOfWindow+400 ){
  $('.meta_info_holder').addClass('mih_show');
  }
  });
  // Fourth app
  $('.section5').each(function(){
  var divPos = $(this).offset().top,
      topOfWindow = $(window).scrollTop();

  if( divPos < topOfWindow+600 ){
  $(this).addClass('sc_show');
  }
  });
  }

// Enter landpage animation section1

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('scc_show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.section1');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
  


  // prlx img

  $(window).scroll(function(){

  	// Add parallax scrolling to all images in .paralax-image container
		  $('.section3').each(function(){
		    // only put top value if the window scroll has gone beyond the top of the image
				    if ($(this).offset().top < $(window).scrollTop()) {
      			// Get ammount of pixels the image is above the top of the window
      			var difference = $(window).scrollTop() - $(this).offset().top;
			      // Top value of image is set to half the amount scrolled
			      // (this gives the illusion of the image scrolling slower than the rest of the page)
			      var half = (difference /10) + 'px',
                transform = 'translate3d( 0, ' + half + ',0)';

			      $(this).find('.imp_prlx').css('transform', transform);
    		} else {
			      // if image is below the top of the window set top to 0
      			$(this).find('.imp_prlx').css('transform', 'translate3d(0,0,0)');
		    }
		  });
      $('.section1').each(function(){
		    // only put top value if the window scroll has gone beyond the top of the image
				    if ($(this).offset().top < $(window).scrollTop()) {
      			// Get ammount of pixels the image is above the top of the window
      			var difference = $(window).scrollTop() - $(this).offset().top;
			      // Top value of image is set to half the amount scrolled
			      // (this gives the illusion of the image scrolling slower than the rest of the page)
			      var half = (difference /15) + 'px',
                transform = 'translate3d( 0, ' + half + ',0)';

			      $(this).find('#spi_planet').css('transform', transform);
    		} else {
			      // if image is below the top of the window set top to 0
      			$(this).find('#spi_planet').css('transform', 'translate3d(0,0,0)');
		    }
		  });
// Section 5 1st image
      $('.section5').each(function(){
				    if ($(this).offset().top < $(window).scrollTop()) {
      			var difference = $(window).scrollTop() - $(this).offset().top;
			      var half = (difference /4) + 'px',
                transform = 'translate3d( 0, ' + half + ',0)';

			      $(this).find('.cat_lx').css('transform', transform);
    		} else {
      			$(this).find('.cat_lx').css('transform', 'translate3d(0,0,0)');
		    }
		  });
// Section 5 2nd image
      $('.section5').each(function(){
        if ($(this).offset().top < $(window).scrollTop()) {
        var difference = $(window).scrollTop() - $(this).offset().top;
        var half = (difference /4) + 'px',
            transform = 'translate3d( 0, ' + half + ',0)';

        $(this).find('.planets_group_stones').css('transform', transform);
      } else {
        $(this).find('.planets_group_stones').css('transform', 'translate3d(0,0,0)');
      }
      });

});