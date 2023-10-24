if (window.devicePixelRatio === 1.25) {
    document.documentElement.style.zoom = '0.8'; // Adjust the zoom level to make it appear like 100% scaling
}

document.addEventListener('DOMContentLoaded', function() {
    var mainContent = document.querySelector('.main-content');

    if (window.devicePixelRatio === 1.25) {
        mainContent.style.top = '110%';
    } else {
        mainContent.style.top = '85%';
    }
});
