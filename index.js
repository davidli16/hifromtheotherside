import koaWebpack from 'koa-webpack';

import webpackConfig from './webpack.config';
import app from './src/server.js';

app.keys = ['development'];

app.use(
  koaWebpack({
    config: webpackConfig,
    dev: {
      publicPath: webpackConfig.output.publicPath,
      serverSideRender: true,
      stats: { colors: true },
    },
    hot: {
      path: '/__webpack_hmr',
    },
  }),
);

app.listen(3000);
