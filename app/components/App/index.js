import Root from '../../experiments/Root'
import Neon from '../../experiments/Neon'
import Atom from '../../experiments/Atom'
import Flow from '../../experiments/Flow'

class AppManager {
  constructor () {
    this.experiments = {
      'root': Root,
      'neon': Neon,
      'atom': Atom,
      'flow': Flow
    }

    this.names = Object.getOwnPropertyNames(this.experiments)

    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))
  }

  onHashChange () {
    const hash = window.location.hash.replace('#', '')

    if (this.experiment) {
      this.experiment.destroy()
    }

    const experiment = (this.names.indexOf(hash) > -1) ? hash : 'root'

    this.experiment = new this.experiments[experiment]()
  }
}

export const App = new AppManager()
