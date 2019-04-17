$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // if (dancerMakerFunction === 'makeBlinkyDancer') {
    //   var dancer = new dancerMakerFunction(
    //     $('body').height() * Math.random() * 0.85,
    //     $('body').width() * Math.random() * 0.85,
    //     Math.random() * 1000
    //   );
    // }

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() * 0.85,
      $('body').width() * Math.random() * 0.85,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
});

