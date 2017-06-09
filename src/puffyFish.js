var makePuffyFish = function(top, left, timeBetweenSteps) {
  makeFish.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = 50;

  this.fishImage = "fish-puff.gif";
  this.$node.append($('<img src='+this.fishImage+'>'));
  this.type = 'puff';
  this.size = 100;
  this.d = 'shrink';

  this.glideDirection = 'right';

};

makePuffyFish.prototype = Object.create(makeFish.prototype);
makePuffyFish.prototype.constructor = makePuffyFish;

makePuffyFish.prototype.oldSwim = makeFish.prototype.swim;

makePuffyFish.prototype.swim = function (){
  this.oldSwim();
  if (this.d === 'shrink') {
    this.size--;
    this.top--;
  } else {
    this.size++;
    this.top++;
  }

  if (this.size < 55) {
    this.d = 'grow';
  } else if (this.size > 85) {
    this.d = 'shrink';
  }

  this.$node.find("img").attr("width", this.size);

  if (this.glideDirection === 'right') {
    this.left++;
  } else if (this.glideDirection === 'left') {
    this.left--;
  }

  if(this.left+100 >= $("body").width()) {
    this.glideDirection = "left";
  } else if (this.left < 0) {
    this.glideDirection = "right";
  }

  this.setPosition(this.top, this.left);
};