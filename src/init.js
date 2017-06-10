$(document).ready(function() {
  window.dancers = [];
  window.fishies = [];

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.random() * ($("body").height()-100 - 100) + 100,
      Math.random() * ($("body").width()-100 - 100) + 100,
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);

    $('.dancer').mouseover(function(){
      $(this).css({"opacity": "1"});
    });
  });

  $('.lineUpButton').on('click',function(event){
    for(var i=0;i<window.dancers.length;i++){
      window.dancers[i].lineUp(i);
    }
  });

});

