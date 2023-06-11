function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight && rect.bottom >= 0;
}

// Autoplay video when scrolled into view
function autoplayVideoOnScroll() {
    var video = document.getElementById('video');
    var videoSection = document.querySelector('.section-3');

    if (isElementInViewport(videoSection)) {
        video.play();
    } else {
        video.pause();
    }
}

// Attach autoplayVideoOnScroll to scroll event
window.addEventListener('scroll', autoplayVideoOnScroll);