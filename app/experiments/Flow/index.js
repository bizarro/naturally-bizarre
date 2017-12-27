import Experiments from '../../classes/Experiments'
import Field from './Field'
import Particle from './Particle'

import {
  randomArbitrary,
  randomInteger
} from '../../utils/random'

export default class Flow extends Experiments {
  constructor () {
    super()

    this.field = null

    this.particles = null
    this.particlesLength = null
    this.particlesColor = null

    this.createField()
    this.createParticles()

    this.update()
  }

  createField () {
    this.field = new Field()
  }

  createParticle () {
    const index = randomInteger(0, this.colors.length - 1)
    const x = randomInteger(0, window.innerWidth)
    const y = randomInteger(0, window.innerHeight)
    const color = this.colors[this.particlesColor][index]
    const radius = randomArbitrary(1, 6)
    const speed = randomInteger(4, 12)
    const force = randomArbitrary(0.4, 1)

    const particle = new Particle(x, y, color, radius, speed, force)

    this.particles.push(particle)
  }

  createParticles () {
    this.particles = []
    this.particlesLength = 1000
    this.particlesColor = randomInteger(0, this.colors.length - 1)

    for (let i = 0; i <= this.particlesLength; i++) {
      this.createParticle()
    }
  }

  update () {
    super.update()

    this.stats.begin()

    this.field.update()

    this.particles.forEach((particle, index) => {
      particle.follow(this.field)
      particle.update()
      particle.check()
      particle.draw(this.context)
    })

    this.context.globalAlpha = 1
    this.context.globalCompositeOperation = 'source-over'

    this.context.fillStyle = 'rgba(0, 0, 0, 0.1)'
    this.context.fillRect(0, 0, window.innerWidth, window.innerHeight)

    this.stats.end()
  }

  dblclick () {
    super.dblclick()

    this.createField()
    this.createParticles()
  }

  resize () {
    super.resize()

    this.createField()
    this.createParticles()
  }
}
