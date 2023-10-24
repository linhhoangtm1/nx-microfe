module.exports = {
  name: 'shared',
  exposes: {
    './Module': './src/remote-entry.ts',
    './Utils': './src/utils/index.ts',
  },
};
