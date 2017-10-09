var points = document.getElementsByClassName('point');

var animatePoints = function(points) {
    var effectTransform = "scaleX(1) translateY(0)";
    for (var i = 0; i < points.length; i++) {
        points[i].style.opacity = 1;
        points[i].style.transform = effectTransform;
        points[i].style.msTransform = effectTransform;
        points[i].style.WebkitTransform = effectTransform;
    }
};

animatePoints(points);
