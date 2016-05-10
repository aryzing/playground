var containsFiveOrMoreDivs = function(domElement) {
  var num = 0;
  function hasDiv (node) {
    var num = 0;
    if (node.nodeName === "DIV") {
      ++num;
    }
    for (var i = 0; i < node.children.length; i++) {
      num += hasDiv(node.children[i]);
    }
    return num;
  }

  for (var i = 0; i < domElement.children.length; i++) {
    num += hasDiv(domElement.children[i]);
  }

  return num > 4;
};



console.log(containsFiveOrMoreDivs(document.body));
