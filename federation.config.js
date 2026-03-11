const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'angular-microfrontend-demo',

  // URLs where the child apps will serve their remoteEntry.json
  remotes: {
    child1: 'http://localhost:4300/remoteEntry.json',
    child2: 'http://localhost:4400/remoteEntry.json',
  },

  exposes: {
    // host uses a standalone root component defined in app.ts
    './Component': './src/app/app.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
