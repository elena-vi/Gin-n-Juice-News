function juice(templateName, data){

	var templateString = peelTemplate(templateName)
	
	var templater =  new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" +
	"with(obj){p.push('" + translateTemplate(templateString) + "');}return p.join('');");

	return data ? templater( data ) : templater;
};

function peelTemplate(templateName) {
	var templateName = "../templates/"+templateName+".html";
	var ajax = new XMLHttpRequest();
	ajax.open("GET", templateName, false);
	ajax.send();
	return ajax.responseText
}

function translateTemplate (templateString) {
	return templateString
	.replace(/[\r\t\n]/g, " ")
	.split("#{yo").join("\t")
	.replace(/((^|\}\})[^\t]*)'/g, "$1\r")
	.replace(/\t=(.*?)\}/g, "',$1,'")
	.split("\t").join("');")
	.split("}}").join("p.push('")
	.split("\r").join("\\'")
}