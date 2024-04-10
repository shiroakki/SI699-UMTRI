window.onload = function () {
    const scene = document.querySelector('a-scene');
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = document.getElementById('loading-text');

    if (!scene) {
        return;
    }

    // Listen for loading events
    scene.addEventListener('loaded', function () {
        // Hide loading screen when A-frame scene is fully loaded
        loadingScreen.style.display = 'none';
    });

    scene.addEventListener('progress', function (event) {
        // Update loading progress
        const progress = event.detail.progress * 100;
        loadingText.innerText = `Loading... ${progress.toFixed(0)}%`;
    });
};