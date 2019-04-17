var images = ['src/dancers/dancer1.png', 'src/dancers/dancer2.png', 'src/dancers/dancer3.png',
  'src/dancers/dancer4.png', 'src/dancers/dancer5.png', 'src/dancers/dancer6.png', 'src/dancers/dancer7.png'];

var popDancer = function (top, left, timeBetweenSteps) {
  //create subclass to refer to makeDancer
  makeDancer.call(this, top, left, timeBetweenSteps);

  var getImg = function () {
    return images[Math.floor(Math.random() * 6)];
  };

  this.$node.addClass('pop');
  this.$node.css('background-image', 'url(' + getImg() + ')');
};
popDancer.prototype = Object.create(makeDancer.prototype); // Override makeBlinkyDancer's prototype
popDancer.prototype.constructor = popDancer;

popDancer.prototype.oldStep = makeDancer.prototype.step;

// popDancer.prototype.step = function () {
//   this.oldStep();
//   // this.$node.toggle();
// };
