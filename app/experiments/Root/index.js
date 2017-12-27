import Experiments from '../../classes/Experiments'
import Walker from './Walker'

import {
  randomInteger
} from '../../utils/random'

export default class Root extends Experiments {
  constructor () {
    super()

    this.walkers = null
    this.walkersLength = null
    this.walkersColor = null

    this.createWalkers()

    this.update()
  }

  createWalker () {
    const index = randomInteger(0, this.colors.length - 1)
    const color = this.colors[this.walkersColor][index]
    const x = randomInteger(0, window.innerWidth)
    const y = randomInteger(0, window.innerHeight)

    const walker = new Walker(color, x, y)

    this.walkers.push(walker)
  }

  createWalkers () {
    this.walkers = []
    this.walkersLength = 2500
    this.walkersColor = randomInteger(0, this.colors.length - 1)

    for (let i = 0; i <= this.walkersLength; i++) {
      this.createWalker()
    }
  }

  update () {
    super.update()

    this.stats.begin()

    this.walkers.forEach(walker => walker.draw(this.context))

    this.context.globalAlpha = 0.1
    this.context.globalCompositeOperation = 'lighter'

    this.stats.end()
  }

  dblclick () {
    super.dblclick()

    this.createWalkers()
  }

  resize () {
    super.resize()

    this.createWalkers()
  }
}
