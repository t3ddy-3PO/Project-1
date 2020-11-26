$(document).ready(function() {
 
    $('.color-choose input').on('click', function() {
        var whichColor = $(this).attr('data-image');
   
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + whichColor + ']').addClass('active');
        $(this).addClass('active');
    });
   
  });