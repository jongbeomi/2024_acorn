/* nav */
jQuery(function($){
  $(".menu_toggle_btn").click(function(){
      $(".gup").stop().slideToggle('fast');
      });
  });

  /* 마우스 호버시 영상 재생 */
  window.onload = function() {
      var videos = document.querySelectorAll('.video_zip video');
      videos.forEach(function(video) {
          video.addEventListener('mouseover', function() {
              this.play();
          });
          video.addEventListener('mouseout', function() {
              this.pause();
          });
      });
  };

  document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector('.menu_toggle_btn');
    
    toggleBtn.addEventListener('click', function() {
      // Toggle stroke color between black and white
      const line1 = document.getElementById('line1');
      const line2 = document.getElementById('line2');
      const line3 = document.getElementById('line3');
      
      if (line1.getAttribute('stroke') === 'white') {
        line1.setAttribute('stroke', 'black');
        line2.setAttribute('stroke', 'black');
        line3.setAttribute('stroke', 'black');
      } else {
        line1.setAttribute('stroke', 'white');
        line2.setAttribute('stroke', 'white');
        line3.setAttribute('stroke', 'white');
      }
    });
  });



