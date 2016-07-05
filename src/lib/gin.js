var routes = {};
function route (path, template, controller) {
  routes[path] = {template: template, controller: controller};
}

var view = null;
function router () {
    view = view || document.getElementById('view');
    var url = location.hash.slice(1) || '/';
    var route = routes[url];
    if (view && route.controller) {
    	var template = "../templates/"+route.template+".html";
    	var ajax = new XMLHttpRequest();
    	ajax.open("GET", template, false);
    	ajax.send();
    	view.innerHTML = ajax.responseText;
        route.controller();
    }
}
// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);