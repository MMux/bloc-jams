window.onload = function() {

    // call animatePoints if window is > 950px tall
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }

    var sellingPoints = document.getElementsByClassName('selling-points')[0];

    window.addEventListener('scroll', function(event) {
        var scrollDistance = sellingPoints.getBoundingClientRect().top -window.innerHeight + 200;
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
}

var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
    var effectTransform = "scaleX(1) translateY(0)";
    for (var i = 0; i < points.length; i++) {
        pointsArray[i].style.opacity = 1;
        pointsArray[i].style.transform = effectTransform;
        pointsArray[i].style.msTransform = effectTransform;
        pointsArray[i].style.WebkitTransform = effectTransform;
    }
};
