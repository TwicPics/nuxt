import { resolve } from 'path'
import consola from 'consola'

const logger = consola.withScope('twicpics')

const defaults = {
  domain: '',
  defaultParams: {}
}

module.exports = function (moduleOptions) {
  const options = Object.assign(defaults, this.options.twicpics, moduleOptions)

  if (!options.domain) {
    logger.error('TwicPics domain option must be definied')
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'twicpics.js',
    options
  })
}

module.exports.meta = require('../package.json')
