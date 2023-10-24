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
document.addEventListener('DOMContentLoaded', function() {
    var mainContent = document.querySelector('.main-content');

    if (window.innerWidth <= 1300) { // Check if screen width is less than or equal to 1300px
        mainContent.style.top = '130%'; // Replace 'someValue' with the desired top position for mobile
    } 
});

