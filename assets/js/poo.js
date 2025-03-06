// play, pause, next, prev audio player
const prevBtn = document.querySelector(".music__prev")
const nextBtn = document.querySelector(".music__next")
const playBtn = document.querySelector(".music__play")
const playIcon = document.querySelector(".music__play i")

const audioPlayer = document.querySelector("#audio-player")

const sourcePath = "../../assets/media"

const audioSources = [
    `${sourcePath}/po.mp3`,





]

let currentMusic = 0;

function loadMusic(musicIndex) {
    audioPlayer.src = audioSources[musicIndex]
    audioPlayer.load()
}


function hideTrackIndicator(musicIndex) {
    const currentTd = document.querySelector(`.sound-track.track--${musicIndex+1}`)
    currentTd.classList.remove("d-block")
    currentTd.classList.add("d-none")
}

function showTrackIndicator(musicIndex) {
    const currentTd = document.querySelector(`.sound-track.track--${musicIndex+1}`)
    currentTd.classList.remove("d-none")
    currentTd.classList.add("d-block")
}

function pauseMusic() {

    audioPlayer.pause()

    playIcon.classList.remove("fa-play")
    playIcon.classList.add("fa-pause")

    hideTrackIndicator(currentMusic)
}

function playMusic() {

    audioPlayer.play()

    playIcon.classList.remove("fa-pause")
    playIcon.classList.add("fa-play")
    
    showTrackIndicator(currentMusic)
}

prevBtn.addEventListener('click', () => {

    hideTrackIndicator(currentMusic)

    if(currentMusic > 0) {
        currentMusic--;
        loadMusic(currentMusic)
        playMusic()
    }
    else {
        pauseMusic()
    }
})

playBtn.addEventListener('click', () => {
    if(audioPlayer.paused) {
        playMusic()
    } else {
        pauseMusic()
    }
})

nextBtn.addEventListener('click', () => {

    hideTrackIndicator(currentMusic)

    if(currentMusic < audioSources.length - 1) {
        currentMusic++;
        loadMusic(currentMusic)
        playMusic()
    } else {
        pauseMusic()
    }
})

loadMusic(currentMusic)
// end play, pause, next, prev audio player