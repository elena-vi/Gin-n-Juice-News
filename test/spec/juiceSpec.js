describe('Juice', function() {

	it('A template get\'s complied', function() {
		expect(juice('home',{snoopDogg: 'Chill, dis be a test'})).toContain('Chill, dis be a test');
	})

	it('Translator removes syntax and separates variables from string', function () {
		expect(translateTemplate('wiggle #{yo= cat } wiggle')).toEqual("wiggle ', cat ,' wiggle");
	});

	describe('Template peeler', function() {
		it('Returns error when template is not found', function () {
			expect(peelTemplate('badTemplate')).toEqual('Template error: 404');
		});

		it('Returns template as a string', function() {
			expect(peelTemplate('home')).toContain('#{yo= snoopDogg}');
		});
	});

});