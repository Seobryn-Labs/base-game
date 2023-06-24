import { CreateIcoSphere, Vector3 } from '@babylonjs/core'
import Game from '../../game'
import GameObject from '../generics/game-object'

export default class Player extends GameObject {
  constructor (game: Game) {
    super('Player', game)

    this.visuals = CreateIcoSphere('GFX', {
      radius: 0.5,
      flat: true,
      subdivisions: 3
    }, game.scene)
    this.visuals.parent = this
    this.visuals.position = Vector3.Zero()

    this.position = Vector3.Zero()
    this.position.y = 1
  }
}
