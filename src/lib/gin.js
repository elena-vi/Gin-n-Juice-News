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
    view.innerHTML = juice(route.template, new route.controller());
  }
}

// Listen on hash change:
window.addEventListener('hashchange', router);
// Listen on page load:
window.addEventListener('load', router);
