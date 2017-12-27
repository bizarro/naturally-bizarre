export default class Vector {
  constructor (x = 0, y = 0, z = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  set (x, y, z) {
    if (x instanceof Vector) {
      this.x = x.x || 0
      this.y = x.y || 0
      this.z = x.z || 0

      return this
    }

    this.x = x || 0
    this.y = y || 0
    this.z = z || 0

    return this
  }

  copy () {
    return new Vector(this.x, this.y, this.z)
  }

  add (x, y, z) {
    if (x instanceof Vector) {
      this.x += x.x || 0
      this.y += x.y || 0
      this.z += x.z || 0

      return this
    }

    this.x += x || 0
    this.y += y || 0
    this.z += z || 0

    return this
  }

  sub (x, y, z) {
    if (x instanceof Vector) {
      this.x -= x.x || 0
      this.y -= x.y || 0
      this.z -= x.z || 0

      return this
    }

    this.x -= x || 0
    this.y -= y || 0
    this.z -= z || 0

    return this
  }

  mult (n = 0) {
    this.x *= n
    this.y *= n
    this.z *= n

    return this
  }

  div (n) {
    this.x /= n
    this.y /= n
    this.z /= n

    return this
  }

  mag () {
    return Math.sqrt(this.magSq())
  }

  magSq () {
    const x = this.x
    const y = this.y
    const z = this.z

    return (x * x + y * y + z * z)
  }

  dot (x = 0, y = 0, z = 0) {
    if (x instanceof Vector) {
      return this.dot(x.x, x.y, x.z)
    }

    return this.x * x + this.y * y + this.z * z
  }

  cross (v) {
    const x = this.y * v.z - this.z * v.y
    const y = this.z * v.x - this.x * v.z
    const z = this.x * v.y - this.y * v.x

    return new Vector(x, y, z)
  }

  dist (v) {
    const d = v.copy().sub(this)

    return d.mag()
  }

  normalize () {
    return this.div(this.mag())
  }

  limit (l) {
    var mSq = this.magSq()

    if (mSq > l * l) {
      this.div(Math.sqrt(mSq))
      this.mult(l)
    }

    return this
  }

  setMag (n) {
    return this.normalize().mult(n)
  }

  heading () {
    return Math.atan2(this.y, this.x)
  }

  rotate (a) {
    const newHeading = this.heading() + a
    const mag = this.mag()

    this.x = Math.cos(newHeading) * mag
    this.y = Math.sin(newHeading) * mag

    return this
  }

  lerp (x, y, z, amt) {
    if (x instanceof Vector) {
      return this.lerp(x.x, x.y, x.z, y)
    }

    this.x += (x - this.x) * amt || 0
    this.y += (y - this.y) * amt || 0
    this.z += (z - this.z) * amt || 0

    return this
  }

  array () {
    return [this.x || 0, this.y || 0, this.z || 0]
  }

  equals (x, y, z) {
    let a, b, c

    if (x instanceof Vector) {
      a = x.x || 0
      b = x.y || 0
      c = x.z || 0
    } else {
      a = x || 0
      b = y || 0
      c = z || 0
    }

    return this.x === a && this.y === b && this.z === c
  }

  static fromAngle (angle) {
    return new Vector(Math.cos(angle), Math.sin(angle), 0)
  }

  static random2D () {
    return this.fromAngle(Math.random() * Math.PI * 2)
  }

  static random3D () {
    const angle = Math.random() * Math.PI * 2
    const vz = Math.random() * 2 - 1

    var vx = Math.sqrt(1 - vz * vz) * Math.cos(angle)
    var vy = Math.sqrt(1 - vz * vz) * Math.sin(angle)

    return new Vector(vx, vy, vz)
  }

  static add (v1, v2, target) {
    if (!target) {
      target = v1.copy()
    } else {
      target.set(v1)
    }

    target.add(v2)

    return target
  }

  static sub (v1, v2, target) {
    if (!target) {
      target = v1.copy()
    } else {
      target.set(v1)
    }

    target.sub(v2)

    return target
  }

  static mult (v, n, target) {
    if (!target) {
      target = v.copy()
    } else {
      target.set(v)
    }

    target.mult(n)

    return target
  }

  static div (v, n, target) {
    if (!target) {
      target = v.copy()
    } else {
      target.set(v)
    }

    target.div(n)

    return target
  }

  static dot (v1, v2) {
    return v1.dot(v2)
  }

  static cross (v1, v2) {
    return v1.cross(v2)
  }

  static dist (v1, v2) {
    return v1.dist(v2)
  }

  static lerp (v1, v2, amt, target) {
    if (!target) {
      target = v1.copy()
    } else {
      target.set(v1)
    }

    target.lerp(v2, amt)

    return target
  }

  static angleBetween (v1, v2) {
    return Math.acos(v1.dot(v2) / (v1.mag() * v2.mag()))
  }
}
