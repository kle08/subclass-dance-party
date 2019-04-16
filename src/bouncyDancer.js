var bouncyDancer = function (top, left, timeBetweenSteps) {
  //create subclass to refer to makeDancer
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncer');
};
bouncyDancer.prototype = Object.create(makeDancer.prototype); // Override makeBlinkyDancer's prototype
bouncyDancer.prototype.constructor = bouncyDancer;

bouncyDancer.prototype.oldStep = makeDancer.prototype.step;

bouncyDancer.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};