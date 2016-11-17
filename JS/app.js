$( document ).ready(function() {
  console.log( 'ready!' );

  $('.pcw').addClass('animated bounceInLeft');
	$('.ansbox').addClass('animated bounceInLeft');
  $('body').addClass('animated zoomIn');
  var timer = 0;
  var ingrediants = [];
  var drink = function(ingrediants){
    this.ingrediants = ingrediants;
  };
  //basic prototype function
  drink.prototype.tellme = function() {
    var recipe = "";
    for (var i=0; i < 3; i++){
      recipe += this.ingrediants[i] + " ";
    }
    console.log("Recipe is: " + recipe);
    return recipe;
  };

  $('.yea').click(function(e){
    if (timer != -2){
      console.log("yea has been pressed");
      e.preventDefault();
      var x = handleresponse(ingrediants, timer, 'y');
      timer = x;
      console.log("click: T is now " + timer);
    }

  $('.nay').click(function(e){
     if (timer != -3){
       console.log("nay has been pressed");
       e.preventDefault();
       var x = handleresponse(ingrediants, timer, 'n');
       timer = x;
       console.log("click: T is now " + timer);
      }
      else {
        console.log("timer is 0:" + timer);
      }
    });


   function handleresponse(ingrediants, timer, YorN){
     console.log("Handle Response Started");
      switch(timer) {
        case -1:
          console.log("YorN is " + YorN + " and t is " + timer);
          if (YorN === 'y') {
            timer -= 1;
            $('.disc').text('Well if ye don\'t want a drink, what be ye doing here?  Does ye want to go to Google?');
            $('.choices').removeClass('.yea');
            $('.choices').html('<button class="yeah" type="submit"><a href="http://www.google.com">Avast</a></button>');
          };
          if (YorN === 'n') {
            timer = 0;
            $('.disc').text('Ahoy, Maties! and welcome to ye olde Pirate Bar, would ye like a drink?');
            $('.yea').text('Yeah!');          $('.nay').text('Nay!');
          };
          break;
        case 0:
            if (YorN === 'y') {
              timer += 1;
              $('.disc').text('That\'s grand!  Would ye like a Strong, or Scurvy Like Drink!?');
              console.log("YorN is " + YorN + " and t is " + timer);
              $('.yea').text('Strong!');          $('.nay').text('Scurvy-like!');
            };
            if (YorN === 'n') {
              timer -= 1;
              console.log("YorN is " + YorN + " and t is " + timer);
              $('.disc').text('Are ye sure?  That\'s no fun at all...');
              console.log("YorN is " + YorN + " and t is " + timer);
              $('.yea').text('I\'m sure');          $('.nay').text('Drink Drink!');
            };
            break;
            //strong or scurvy like,
        case 1:
          if (YorN === 'y') {
            console.log("YorN is " + YorN + " and t is " + timer);
            $('.disc').html("<p>Strong eh?  Would ye like Rum or Whiskey in ye drink?</p>");
            ingrediants.push("Strong");
            $('.yea').text('Rum!');
            $('.nay').text('Whiskey!');
            timer += 1;
          };
          if (YorN === 'n') {
            $('.disc').html("<p>Scurvy-like eh?  Does ye like Pinapple, or Mango?</p>");
            ingrediants.push("Scurvy-Like");
            $('.yea').text('Pinapple!');
            $('.nay').text('Mango!');
            timer += 2;
          };
          break;
        case 2:
        if (YorN === 'n') {
          console.log("YorN is " + YorN + " and t is " + timer);
          $('.disc').html("<p>Whiskey eh, whoo hoo!  Now; Pinapple or Mango?</p>");
          ingrediants.push("Whiskey");
          $('.yea').text('Pinapple!');
          $('.nay').text('Mango!');
          timer += 2;
        };
        if (YorN === 'y') {
          $('.disc').html("<p>Rum, I should've guessed ye scurvy dog- last question;</p>");
          ingrediants.push("Rum!");
          $('.yea').text('Pinapple!');
          $('.nay').text('Mango!');
          timer += 2;
        };
        break;
        case 3:
        if (YorN === 'n') {
            console.log("YorN is " + YorN + " and t is " + timer);
            $('.disc').html("<p>Mango!  I love Mango!  What's yer posion?</p>");
            ingrediants.push("Mango");
            $('.yea').text('Rum!');
            $('.nay').text('Whiskey!');
              timer += 2;
            };
            if (YorN === 'y') {
              $('.disc').html("<p>Pinapple!  Davy Jones would be proud!  What's yer posion?</p>");
              ingrediants.push("Pinapple");
              $('.yea').text('Rum!');
              $('.nay').text('Whiskey!');
              timer += 2;
            };
            break;
            //4 end strong, 5 ends scurvy
        case 4:
          $('.yea').toggle();
          $('.nay').toggle();
          if (YorN === 'y') {
            ingrediants.push("Pinapple");
            console.log("YorN is " + YorN + " and t is " + timer);
            $('.disc').html("<p>And your Drink is...</p>");
            var d = new drink(ingrediants);
            console.log(d);
            $('.choices').text(d.tellme());
                  };
            if (YorN === 'n') {
              ingrediants.push("Mango");
              console.log("YorN is " + YorN + " and t is " + timer);
              $('.disc').html("<p>And your Drink is...</p>");
              $('.choices').removeClass('.yea');
              $('.choices').removeClass('.nay');
              var d = new drink(ingrediants);
              console.log(d);
              $('.choices').text(d.tellme());
                  };
          break;
        case 5:
          $('.yea').toggle();
          $('.nay').toggle();
          if (YorN === 'y') {
            ingrediants.push("Rum");
            console.log("YorN is " + YorN + " and t is " + timer);
            $('.disc').html("<p>And your Drink is...</p>");
            var d = new drink(ingrediants);
            $('.choices').text(d.tellme());
            console.log(d);
                            };
          if (YorN === 'n') {
            ingrediants.push("Whiskey");
            console.log("YorN is " + YorN + " and t is " + timer);
            //outcome; what more to add?
            $('.disc').html("<p>And your Drink is...</p>");
            var d = new drink(ingrediants);
            console.log(d);
            $('.choices').text(d.tellme());
                };
          break;
        default:
          //any ideas how to handle or do i even need to handle default?
          console.log("default, but how?");
        }
        console.log("handler: t is now " + timer)
        return timer;
        //returns updated timer.
      };
});
