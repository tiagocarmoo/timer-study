import state from "./state.js";
import * as timer from './timer.js'
import * as el from './elements.js'
import * as audio from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    audio.buttonPressAudio.play()
}

export function toggleStop() {
    state.isRunning = false
    state.isRunning = document.documentElement.classList.remove('running')
    timer.updateDisplay()
    audio.buttonPressAudio.play()

}

export function addTime() {
    console.log('add time');
    let currentMinutes = el.minutes.textContent

    currentMinutes = Number(currentMinutes) + 5

    if (currentMinutes > 59) {
        currentMinutes = 59
    }

    el.minutes.textContent = currentMinutes

}

export function removeTime() {
    let currentMinutes = el.minutes.textContent

    currentMinutes = Number(currentMinutes) - 5

    if (currentMinutes < 0) {
        currentMinutes = 0
    }

    el.minutes.textContent = currentMinutes

}



// adicionando as musicas
export function musicForest() {
    document.documentElement.classList.remove('musicRain');
    document.documentElement.classList.remove('musicCoffee');
    document.documentElement.classList.remove('musicFireplace');

    audio.chuva.pause()
    audio.lareira.pause()
    audio.cafeteria.pause()

    state.isMute = document.documentElement.classList.toggle('musicForest')

    if (state.isMute) {
        audio.floresta.play()
        return
    }

    audio.floresta.pause()
}

export function musicRain() {
    document.documentElement.classList.remove('musicForest');
    document.documentElement.classList.remove('musicCoffee');
    document.documentElement.classList.remove('musicFireplace');

    audio.floresta.pause()
    audio.lareira.pause()
    audio.cafeteria.pause()

    state.isMute = document.documentElement.classList.toggle('musicRain')

    if (state.isMute) {
        audio.chuva.play()
        return
    }

    audio.chuva.pause()
}

export function musicCoffee() {
    document.documentElement.classList.remove('musicForest');
    document.documentElement.classList.remove('musicRain');
    document.documentElement.classList.remove('musicFireplace');

    audio.floresta.pause()
    audio.lareira.pause()
    audio.chuva.pause()

    state.isMute = document.documentElement.classList.toggle('musicCoffee')

    if (state.isMute) {
        audio.cafeteria.play()
        return
    }

    audio.cafeteria.pause()
}

export function musicFireplace() {
    document.documentElement.classList.remove('musicForest');
    document.documentElement.classList.remove('musicRain');
    document.documentElement.classList.remove('musicCoffee');

    audio.floresta.pause()
    audio.chuva.pause()
    audio.cafeteria.pause()

    state.isMute = document.documentElement.classList.toggle('musicFireplace')

    if (state.isMute) {
        audio.lareira.play()
        return
    }

    audio.lareira.pause()
}


/* MELHORIA DO CODIGO DE MUSICAS
function toggleMusic(musicType) {
    const musicClasses = ['musicForest', 'musicRain', 'musicCoffee', 'musicFireplace'];

    musicClasses.forEach(className => {
        if (className !== musicType) {
            document.documentElement.classList.remove(className);
        }
    });

    state.isMute = document.documentElement.classList.toggle(musicType);
}

export function musicForest() {
    toggleMusic('musicForest');
}

export function musicRain() {
    toggleMusic('musicRain');
}

export function musicCoffee() {
    toggleMusic('musicCoffee');
}

export function musicFireplace() {
    toggleMusic('musicFireplace');
}
*/