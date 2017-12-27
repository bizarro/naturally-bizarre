import Vector from '../../classes/Vector'

export default class Particle {
  constructor (x, y, color, radius, speed, force) {
    this.color = color

    this.position = new Vector(x, y)
    this.acceleration = new Vector(0, 0)
    this.velocity = new Vector(0, 0)

    this.radius = radius
    this.speed = speed
    this.force = force
  }

  follow (flow) {
    const desired = flow.lookup(this.position)

    desired.mult(this.speed)

    const steer = Vector.sub(desired, this.velocity)

    steer.limit(this.force)

    this.apply(steer)
  }

  apply (force) {
    this.acceleration.add(force)
  }

  update () {
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.speed)

    this.position.add(this.velocity)

    this.acceleration.mult(0)
  }

  check () {
    if (this.position.x > window.innerWidth) {
      this.position.x = 0
    } else if (this.position.x < 0) {
      this.position.x = window.innerWidth
    }

    if (this.position.y > window.innerHeight) {
      this.position.y = 0
    } else if (this.position.y < 0) {
      this.position.y = window.innerHeight
    }
  }

  draw (context) {
    context.lineWidth = 2

    context.globalCompositeOperation = 'lighter'

    context.beginPath()
    context.arc(this.position.x, this.position.y, 1, 0, 2 * Math.PI)
    context.closePath()

    context.fillStyle = this.color
    context.fill()
  }
}
