var timeout = 15000;
var timeoutIds = [];

timeoutIds.push(setTimeout(showNext, timeout));

function showNext() {
    var nextPictureNumber = Number(document.getElementById("main-picture").src.substr(-5, 1)) + 1;
    if (nextPictureNumber > 7) {
      nextPictureNumber = 1;
    }
    document.getElementById("main-picture").src = "images/" + nextPictureNumber + ".png";
    for (var i = 0; i < timeoutIds.length; i++) {
      clearTimeout(timeoutIds[i]);
    }
    timeoutIds.push(setTimeout(showNext, timeout));
}

function changePicture(imageNumber) {
  if (imageNumber) {
    document.getElementById("main-picture").src = "images/" + imageNumber + ".png";
    for (var i = 0; i < timeoutIds.length; i++) {
      clearTimeout(timeoutIds[i]);
    }
    timeoutIds.push(setTimeout(showNext, timeout));
  }
}
