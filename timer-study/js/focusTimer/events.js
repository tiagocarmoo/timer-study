import { controlsMusic, controlsTimer } from "./elements.js";
import * as actions from './actions.js'

export function buttonsControls() {
    controlsTimer.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        if (typeof actions[action] != 'function') {
            return
        }

        /* actions['toggleRunning']() <-- As ações(dataset) posso executar assim também */
        actions[action]() 
    })
    
    controlsMusic.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        
        if (typeof actions[action] != 'function') {
            return
        }

        actions[action]()
    })
}