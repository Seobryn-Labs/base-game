import { CreateBox, Vector3 } from '@babylonjs/core'
import Game from '../../game'
import GameObject from '../generics/game-object'

export default class Ground extends GameObject {
  constructor (x: number, z: number, game: Game) {
    super('Ground', game)
    this.visuals = CreateBox('GFX', {
      size: 10,
      width: 10,
      height: 0.1,
      depth: 10
    }, game.scene)
    this.visuals.parent = this

    this.position = Vector3.Zero()
    this.position.x = x
    this.position.z = z
  }
}
