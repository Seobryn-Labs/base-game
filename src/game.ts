import { Engine, Scene } from '@babylonjs/core'

export default class Game {
  engine: Engine
  scene: Scene

  constructor (private readonly canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas)
    this.scene = Game.createScene(this.engine)

    this.engine.runRenderLoop(() => {
      this.scene.render()
    })
  }

  public static createScene (engine: Engine): Scene {
    const scene = new Scene(engine)
    return scene
  }
}
