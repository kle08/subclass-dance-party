var popDancer = function (top, left, timeBetweenSteps) {
  //create subclass to refer to makeDancer
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('pop');
};
popDancer.prototype = Object.create(makeDancer.prototype); // Override makeBlinkyDancer's prototype
popDancer.prototype.constructor = popDancer;

popDancer.prototype.oldStep = makeDancer.prototype.step;

popDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};