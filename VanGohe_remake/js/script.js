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