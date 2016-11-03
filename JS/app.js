$( document ).ready(function() {
  console.log( 'ready!' );

  $('.pcw').addClass('animated bounceInLeft');
	$('.ansbox').addClass('animated bounceInLeft');
  $('body').addClass('animated zoomIn');
  var t = 0;

  $('.yea').click(function(e){
    console.log("yea has been pressed");
        event.preventDefault();
        handleresponse('y');
          /*$('#action-button').click();
          $('#searcho').empty();
          $('#picto').hide();
          $('#info').hide();
          $('#infob').hide();
          $('#infoc').hide();*/
        });

  $('.nay').click(function(e){
     console.log("nay has been pressed");
     event.preventDefault();
     handleresponse('n');
    });

   function handleresponse(YorN){

      switch(t) {
        case 0:
          if (YorN === 'y') {
            console.log("YorN is " + YorN + " and t is " + t);
            $('p').html("<p>Good!  This wouldn't be any fun if ye choosed ne! Do ye like Strong, or Scurvy-like!?</p>");
            $('.choices').html("<button class='yea' type='submit'>Strong!</button><button class='yea'type='submit'>Scury-like?</button>");
            $('.choices').html();
            t += 1
          };
          if (YorN === 'n') {
            console.log("YorN is " + YorN + " and t is " + t);
            t += 1
          };
          break;
        case 1:
          if (YorN === 'y') { console.log("YorN is " + YorN + " and t is " + t);
          t += 1};
          if (YorN === 'n') { console.log("YorN is " + YorN + " and t is " + t);
          t += 1};
            break;
        case 2:
          if (YorN === 'y') {
            console.log("YorN is " + YorN + " and t is " + t);
            t += 1};
          if (YorN === 'n') {
            console.log("YorN is " + YorN + " and t is " + t);
            t += 1};
        break;
        case 3:
          if (YorN === 'y') { console.log("YorN is " + YorN + " and t is " + t);
          t += 1};
          if (YorN === 'n') { console.log("YorN is " + YorN + " and t is " + t);
          t += 1};
            break;
        case 4:
          if (YorN === 'y') {
            console.log("YorN is " + YorN + " and t is " + t);
            t += 1};
          if (YorN === 'n') {
            console.log("YorN is " + YorN + " and t is " + t);
            t += 1};
        break;
        default:
          console.log("default, but how?");
        }
        console.log("t is now " + t)
        return t;
      };

});
