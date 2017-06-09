var makeYellowFish = function(top, left, timeBetweenSteps) {
  makeFish.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = Math.floor(Math.random() * (20 - 5)) + 5;
  this.glideDirection = 'right';

  this.fishImageRight = "fish-yellow-right.gif";
  this.fishImageLeft = "fish-yellow-left.gif";
  this.$node.append($('<img src='+this.fishImageRight+'>'));
  this.type = 'yellow';

};

makeYellowFish.prototype = Object.create(makeFish.prototype);
makeYellowFish.prototype.constructor = makeYellowFish;

makeYellowFish.prototype.oldSwim = makeFish.prototype.swim;

makeYellowFish.prototype.swim = function (){
  this.oldSwim();
  if (this.glideDirection === 'right') {
    this.left = this.left + 1;
  } else if (this.glideDirection === 'left') {
    this.left = this.left - 1;
  }

  if(this.left+100 >= $("body").width()) {
    this.glideDirection = "left";
    this.setImage(this.fishImageLeft);
  } else if (this.left < 0) {
    this.glideDirection = "right";
    this.setImage(this.fishImageRight);
  }

  this.setPosition(this.top, this.left);
};