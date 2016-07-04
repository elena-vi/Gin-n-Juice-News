var routes = {};
function route (path, templateId, controller) {
  routes[path] = {templateId: templateId, controller: controller};
}

var view = null;
function router () {
    view = view || document.getElementById('view');
    var url = location.hash.slice(1) || '/';
    var route = routes[url];
    if (view && route.controller) {
			 // view.innerHTML = route.templateId;
	    var template = "../templates/"+route.templateId+".html";
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