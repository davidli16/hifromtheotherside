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
    'inline-dotenv',
    [
      'module-resolver',
      {
        root: ['./'],
      },
    ],
  ],
});
require('./server');
