describe('Gin', function() {

	beforeEach(function() {
	});

	describe('Routes', function() {
		it('Initialised empty', function() {
			expect(routes).toEqual({});
		});

		describe('Route', function() {
			it('Can be added', function () {
				var Obj = jasmine.objectContaining;
				route('testRoute', 'testy', 'magicalTest');
				expect(routes).toEqual(Obj({testRoute: Obj({})}));
			});
			it('Has stored template name', function () {
				expect(routes['testRoute'].template).toEqual('testy');
			});
			it('Has stroed controller', function () {
				expect(routes['testRoute'].controller).toEqual('magicalTest');
			});
		});
	});

	describe('Router', function() {

		xit('Calls juice', function() {
			router();
			expect(jasmine.createSpy('juice')).toHaveBeenCalled();
		});
	});

	xit('Window has event listeners', function() {
			expect((window)).toEqual("o");
		});
});