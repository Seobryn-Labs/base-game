import { Mesh, Scene, TransformNode } from '@babylonjs/core'
import Game from '../../game'

export default class GameObject extends TransformNode {
  scene: Scene
  protected visuals?: Mesh

  constructor (name: string, private readonly _game: Game) {
    super(name, _game.scene)
    this.scene = _game.scene
  }
}
