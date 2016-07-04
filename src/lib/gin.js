var routes = {};
function route (path, template) {
  routes[path] = {template: template};
}

var view = null;
function router () {
    view = view || document.getElementById('view');
    var url = location.hash.slice(1) || '/';
    var route = routes[url];
    if (view) {
			 // view.innerHTML = route.template;
	    var template = "../templates/"+route.template+".html";
	    var ajax = new XMLHttpRequest();
			ajax.open("GET", template, false);
			ajax.send();
			view.innerHTML = ajax.responseText;
    }
}
// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);