import { ArcRotateCamera, Color3, Color4, Engine, HemisphericLight, Scene, TransformNode, Vector3 } from '@babylonjs/core'
import { Ground, Player } from './assets/game-objects'

export default class Game {
  engine: Engine
  scene: Scene
  player?: Player

  constructor (private readonly canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas)
    this.scene = Game.createScene(this.engine)

    window.addEventListener('keydown', (evt) => {
      // Shift+Ctrl+I
      if (evt.shiftKey && evt.ctrlKey && evt.key === 'I') {
        if (this.scene.debugLayer.isVisible()) {
          this.scene.debugLayer.hide()
        } else {
          this.scene.debugLayer.show().catch((err) => {
            console.error(err)
          })
        }
      }
    })

    this.initGame()

    this.engine.runRenderLoop(() => {
      this.scene.render()
    })
  }

  public static createScene (engine: Engine): Scene {
    const _scene = new Scene(engine)
    _scene.clearColor = new Color4(0, 0, 0, 0)

    const camera = new ArcRotateCamera('MainCamera', 0, Math.PI / 3, 5, Vector3.Zero(), _scene)
    camera.lowerRadiusLimit = 9
    camera.upperRadiusLimit = 20
    camera.setTarget(Vector3.Zero())
    camera.attachControl(_scene.getEngine().getRenderingCanvas(), true)

    const sunLight = new HemisphericLight('SunLight', new Vector3(0, 1, 0), _scene)
    sunLight.intensity = 0.7
    _scene.ambientColor = Color3.Yellow()

    const root = new TransformNode('Root', _scene)
    camera.parent = root
    sunLight.parent = root

    return _scene
  }

  initGame (): void {
    const rootNode = this.scene.getNodeByName('Root')
    this.player = new Player(this)
    this.player.parent = rootNode

    const ground = new Ground(0, 0, this)
    ground.parent = rootNode
  }
}
