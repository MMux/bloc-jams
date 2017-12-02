$(window).load (function() {

    // call animatePoints if window is > 950px tall
    if ($(window).height() > 950) {
        animatePoints();
    }

    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

    $(window).scroll(function(event) {
        if ($(window).scrollTop() >= scrollDistance) {
            animatePoints();
        }
    });
});


var animatePoints = function() {
    var revealPoint = function() {
        $(this).css({
            opacity: 1,
            transform: 'scaleX(1) translateY(0)'
        });
    };
    $.each($('.point'), revealPoint);
};

var transform = function(element) {
    var effectTransform = "scaleX(1) translateY(0)";
    element.style.opacity = 1;
    element.style.transform = effectTransform;
    element.style.msTransform = effectTransform;
    element.style.WebkitTransform = effectTransform;
};
