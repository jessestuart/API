import getAll from './funcs/getAll'
import getCountries from './funcs/getCountries'
import getStates from './funcs/getStates'
import jhuLocations from './funcs/jhuLocations'
import historical from './funcs/historical'

// const getAll = require('./funcs/getAll')
console.log({ getAll })

export default {
  getAll,
  getCountries,
  getStates,
  historical,
  jhuLocations,
}

// module.exports = {
//   getAll: require('./funcs/getAll').default,
//   getCountries: require('./funcs/getCountries'),
//   getStates: require('./funcs/getStates'),
//   jhuLocations: require('./funcs/jhuLocations'),
//   historical: require('./funcs/historical'),
// }
