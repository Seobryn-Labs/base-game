import Game from './game'
import './style.css'

const canvas = document.querySelector('#Game') as HTMLCanvasElement

const game = new Game(canvas)
