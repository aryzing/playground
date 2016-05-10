var containsFiveOrMoreDivs = function(domElement) {
  var num = 0;

  function Inner(node) {
    if(node.nodeName === "DIV"){num++;}
    if(node.childNodes) {
      for(var i = 0; i < node.childNodes.length; i++) {
        var children = node.childNodes[i];
        if(children.nodeName === "DIV"){
          num++;
        }
        Inner(children);
      }
    }

  }
  Inner(domElement);
  return num > 4;
};

console.log(containsFiveOrMoreDivs(document.body));
