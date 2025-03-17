audio.crossOrigin = "anonymous";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(() => {
        console.log("Service Worker Registered");
    });
}

const audio = new Audio('audio/music.mp3?raw=true');
audio.loop = true;

document.getElementById('playButton').addEventListener('click', () => {
    audio.play();
    navigator.mediaSession.metadata = new MediaMetadata({
        title: "Background Music",
        artist: "Unknown",
        album: "PWA Audio",
        artwork: [{ src: "icon.png", sizes: "512x512", type: "image/png" }]
    });
});

document.getElementById('pauseButton').addEventListener('click', () => {
    audio.pause();
});
