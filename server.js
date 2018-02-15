import Koa from 'koa';
import React from 'react';
import koaSession from 'koa-session';
import koaWebpack from 'koa-webpack';
import koaReactRouter from 'koa-react-router';
import koaBodyParser from 'koa-bodyparser';

import App from './components/App';
import webpackConfig from './webpack.config';
import db from './data/models';
import auth from './lib/auth';

import adminRoutes from './routes/admin';
import authRoutes from './routes/auth';

import './routes';

const app = new Koa();

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

app.use(koaSession({ key: 'hftos' }, app));
app.use(koaBodyParser());

app.use(auth.initialize());
app.use(auth.session());

app.use(adminRoutes.routes());
app.use(authRoutes.routes());

app.use(
  koaReactRouter({
    App,
    onError(ctx, err) {
      console.log(`Error: ${err}`);
    },
    onRender(ctx) {
      const assetsByChunkName = ctx.state.webpackStats.toJson()
        .assetsByChunkName;
      return {
        containerRenderer: view => (
          <html lang="en">
            <head>
              <title>hello from the other side</title>
              <meta charSet="utf-8" />
              <meta httpEquiv="x-ua-compatible" content="ie=edge" />
              <title>hi from the other side</title>
              <meta name="description" content="" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
            </head>
            <body>
              <div id="react" dangerouslySetInnerHTML={{ __html: view }} />
              <script src="/static/manifest.js" />
              <script src="/static/vendor.js" />
              <script src="/static/app.js" />
            </body>
          </html>
        ),
      };
    },
  }),
);

app.listen(3000);
