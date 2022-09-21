module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    ['module-resolver', {
      root: ['./src'],
      alias: {
        '@controllers': './src/controllers',
        '@routes': './src/routes',
        '@utils': './src/utils',
        '@': './src',
      },
    }],
  ],
};
