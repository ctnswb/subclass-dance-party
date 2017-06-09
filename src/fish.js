var makeFish = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="fish"></span>');
  this.top = top;
  this.left = left;
  this.swim();
  this.setPosition(top, left);
};

makeFish.prototype.swim = function() {
  setTimeout(this.swim.bind(this), this.timeBetweenSteps);
};

makeFish.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeFish.prototype.getPosition = function() {
  return [this.top, this.left];
}

makeFish.prototype.setImage = function(img) {
  this.$node.find("img").attr("src", img);
}

makeFish.prototype.setSpeed = function(speed) {
  this.timeBetweenSteps = speed;
}

makeFish.prototype.getInFormation = function(top, left){
  this.top = top;
  this.left = left;
}