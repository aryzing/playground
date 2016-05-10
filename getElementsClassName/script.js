var getElementsByClassName = function(className) {
  if (typeof className !== 'string') {
    return [];
  }
  //remove white space and create array of class names
  var classes = className.trim().replace(/\s+/, " ");
  classes = classes.split(' ');

  var hasClass = function(node) {
    var found = false;
    for (var i = 0; i < classes.length && !found; i++) {
      for (var j = 0; j < node.classList.length && !found; j++) {
        found = classes[i] == node.classList[j];
      }
    }
    return found;
  };

  var hasChildren = function(node) {
    return node.children.length > 0;
  };

  var checkNode = function(node) {
    var result = [];
    if (hasClass(node)) {
      result.push(node);
    }
    if (hasChildren(node)) {
      for (var i = 0; i < node.children.length; i++) {
        result = result.concat(checkNode(node.children[i]));
      }
    }
    return result;
  };

  return checkNode(document.body);

};

var selected2 = document.getElementsByClassName('cuerpo')
var selected = getElementsByClassName('cuerpo');
