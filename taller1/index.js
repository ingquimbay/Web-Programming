function cambialo(element) {
  element.style.color = "black";
  element.style.textSize = '3em';
  element.style.backgroundColor = "#FFAE27";
  element.style.borderstyle = "solid";
  element.style.bordercolor = "282FBF";
  element.style.borderradius = "15px";
  element.style.boxshadow = '10px 10px 10px gray';
  element.style.width = "500px";
  element.style.height = "200px";
  element.childNodes [0].nodeValue = "Se ha cambiado el estilo del texto";
}

$('.nav').localScroll();
