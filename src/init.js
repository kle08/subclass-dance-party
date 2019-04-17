$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() * 0.8 + $('body').height() * 0.1,
      $('body').width() * Math.random() * 0.85,
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  // $('.addLineUpButton').on('click', function (event) {
  //   for (let i = 0; i < window.dancers.length; i++) {
  //     window.dancers[i].css('position', 'relative');
  //   }
  // });

  $('.addLineUpButton').on('click', function (event) {
    var t = $('body').height() * 0.8;
    var l = $('body').width() * 0.05;

    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].setPosition(t, l);
      if (l > $('body').width() * 0.85) {
        l = $('body').width() * 0.05;
        t -= 120;
      } else {
        l += 120;
      }
    }
  });

  // $('.trollButton').on('click', function (event) {
  //   $('body').css('background-image', 'url("https://media.giphy.com/media/a6OnFHzHgCU1O/giphy.gif")');
  // });
});


