describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(blinkyDancer.$node, 'toggle');
  //   blinkyDancer.step();
  //   expect(blinkyDancer.$node.toggle.called).to.be.true;
  // });

  //Added test
  it('should have a step function that makes its node decrease in size', function() {
    var size = blinkyDancer.size;
    blinkyDancer.step();
    expect(blinkyDancer.size).to.equal(50);
  });
  //Added test
  it('should have a step function that makes its node increase in size', function() {
    var size = blinkyDancer.size;
    blinkyDancer.step();
    blinkyDancer.step();
    expect(blinkyDancer.size).to.equal(100);
  });

  it('should attach image to node', function(){
    expect(blinkyDancer.$node.find('img').attr('src')).to.equal('fish-puff.gif');
  });

  //Changed test
  describe('dance', function() {
    it('should call step at least once every 2.5 seconds', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...

      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
