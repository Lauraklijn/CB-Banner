var picArray = new Array();
picArray[0] = "./img/Samsung Eco Bubble.jpeg";
picArray[1] = "./img/Samsung-Eco-Bubble-3.png";
picArray[2] = "./img/Samsung-Eco-Bubble-back.png";

var idx = 1;

var timer;
function resetPic() {
  clearTimeout(timer);
  document.getElementById("productImg").src = picArray[0];
}

function rotatePic() {
  document.getElementById("productImg").src = picArray[idx];
  if (idx == 2) idx = 0;
  else idx++;
  timer = setTimeout("rotatePic()", 1000);
}
