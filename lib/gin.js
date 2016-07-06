var routes = {};

function route (path, templateName, controller) {
  routes[path] = {template: templateName, controller: controller};
}

var view = null;

function router () {
  view = view || document.getElementById('view');
  var url = "/" + location.hash.slice(1).split('/')[1]
  var params = location.hash.slice(1).split('/')[2]
  var route = routes[url];
  if (view && route.controller) {
    view.innerHTML = juice(route.templateName, new route.controller(params));
  }
}

// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);
