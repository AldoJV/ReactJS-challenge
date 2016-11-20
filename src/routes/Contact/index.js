import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'contact',
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Counter = require('./containers/ContactContainer').default
      const reducer = require('./modules/contact').default

      /*  Add the reducer to the store on key 'contact'  */
      injectReducer(store, { key: 'contact', reducer })

      /*  Return getComponent   */
      cb(null, Counter)

    /* Webpack named bundle   */
    }, 'contact')
  }
})
