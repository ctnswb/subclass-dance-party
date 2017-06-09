var makeGlidingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = 5;
  this.glideDirection = 'right';

};

makeGlidingDancer.prototype = Object.create(makeDancer.prototype);
makeGlidingDancer.prototype.constructor = makeGlidingDancer;

makeGlidingDancer.prototype.oldStep = makeDancer.prototype.step;

makeGlidingDancer.prototype.step = function (){
  this.oldStep();
  if(this.glideDirection === 'right') {
    this.left = this.left + 1;
  }

  if(this.glideDirection === 'left') {
    this.left = this.left - 1;
  }

  if(this.left+20 >= $("body").width()) {
    this.glideDirection = "left";
  }

  if(this.left < 0) {
    this.glideDirection = "right";
  }


  this.setPosition(this.top, this.left);
};