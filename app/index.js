import './styles/index.scss'

import Badge from './components/Badge'
import Navigation from './components/Navigation'

import Root from './experiments/Root'
import Neon from './experiments/Neon'
import Atom from './experiments/Atom'
import Flow from './experiments/Flow'

class App {
  constructor () {
    this.experiments = {
      'root': Root,
      'neon': Neon,
      'atom': Atom,
      'flow': Flow
    }

    this.names = Object.getOwnPropertyNames(this.experiments)

    this.badge = new Badge()
    this.navigation = new Navigation(this.names)

    this.addEventListeners()
  }

  onHashChange () {
    const hash = window.location.hash.replace('#', '')

    if (this.experiment) {
      this.experiment.destroy()
    }

    const experiment = (this.names.indexOf(hash) > -1) ? hash : 'root'

    this.experiment = new this.experiments[experiment]()

    this.navigation.onHashChange(`#${experiment}`)
  }

  addEventListeners () {
    this.onHashChangeEvent = this.onHashChange.bind(this)

    window.addEventListener('hashchange', this.onHashChangeEvent)
    window.addEventListener('load', this.onHashChangeEvent)
  }
}

new App() // eslint-disable-line
