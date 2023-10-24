const coreLibraries = new Set([
  'react',
]);

module.exports = {
  name: 'host',
  remotes: ['shop', 'cart', 'shared'],
  shared: (libraryName, defaultConfig) => {
    if (coreLibraries.has(libraryName)) {
      return defaultConfig;
    }

    // Returning false means the library is not shared.
    return false;
  },
};
