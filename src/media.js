const audio = new Audio();

function playAudio(src, muted = false, loop = false, autoplay = false) {
    function config(audio) {
        audio.currentTime = 0;
        audio.muted = muted;
        audio.autoplay = autoplay;
        audio.src = src;
        if (loop) {
            audio.addEventListener('ended', () => {
                audio.currentTime = 0;
                audio.play();
            });
        }
        return audio;
    }
    let sound;
    // autoplay和loop播放的audio会污染别的audio配置
    if (loop || autoplay) {
        const newAudio = new Audio();
        sound = config(newAudio);
    } else {
        sound = config(audio);
    }
    
    const promise = sound.play();
    if (promise !== undefined) {
        promise.catch(error => {
            window.addEventListener('touchstart', function once() {
                sound.play();
                window.removeEventListener('touchstart', once);
            });
            console.warn(error);
            // Auto-play was prevented
            // Show a UI element to let the user manually start playback
        }).then(() => {
            // Auto-play started
        });
    }
}