require('babel-register')({
  babelrc: false,
  presets: [
    [
      'env',
      {
        useBuiltIns: true,
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
      },
    ],
  ],
});
require('./server');
