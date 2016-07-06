(function(){
	var cache = {};

	this.juice = function juice(templateName, data){
		// Figure out if we're getting a templateName, or if we need to
		// load the templateName - and be sure to cache the result.
		var templater = !/\W/.test(templateName) ?
		cache[templateName] = cache[templateName] ||
		juice(peelTemplate(templateName)) :

		// Generate a reusable function that will serve as a templateName
		// generator (and which will be cached).
		new Function("obj",
		"var p=[],print=function(){p.push.apply(p,arguments);};" +

		// Introduce the data as local variables using with(){}
		"with(obj){p.push('" +

		// Convert the templateName into pure JavaScript
		templateName
		.replace(/[\r\t\n]/g, " ")
		.split("#{yo").join("\t")
		.replace(/((^|\}\})[^\t]*)'/g, "$1\r")
		.replace(/\t=(.*?)\}/g, "',$1,'")
		.split("\t").join("');")
		.split("}}").join("p.push('")
		.split("\r").join("\\'")
		+ "');}return p.join('');"
		);

		// Provide some basic currying to the user
		return data ? templater( data ) : templater;
	};
})();

function peelTemplate(templateName) {
	var templateName = "../templates/"+templateName+".html";
	var ajax = new XMLHttpRequest();
	ajax.open("GET", templateName, false);
	ajax.send();
	return ajax.responseText
}