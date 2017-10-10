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

var animatePoints = function(target) {
    forEach(target, transform);
};

var transform = function(element) {
        var effectTransform = "scaleX(1) translateY(0)";
        element.style.opacity = 1;
        element.style.transform = effectTransform;
        element.style.msTransform = effectTransform;
        element.style.WebkitTransform = effectTransform;
};
