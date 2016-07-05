var Browser = require('zombie');
var assert = require('assert');

Browser.localhost('localhost', 3000);

describe('Gin YO', function() {

  const browser = new Browser();

  before( function() {
    return browser.visit('/');
  })

  describe('it does a thing', function() {

    it('does this thing well', function() {
      browser.assert.success();
    });

    xit('returns the h3 of the root', function() {
      assert.equal( browser.text("h3"), "To do List");
    });

    describe('it goes to another route specified in the routes', function() {
      it('returns 200 for this new route', function() {
        browser.visit('#/page1').then(function(done) {
          browser.assert.success();
          done();
        })
      });

      it('returns the heading from the new route', function() {
        browser.visit('#/page1').then(function(done) {
          assert.equal( browser.text("h3"), "Cash money");
          done();
        });
      });

    });

  });

});
