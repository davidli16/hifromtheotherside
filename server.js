import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session';
import next from 'next';

import auth from 'lib/auth';
import db from 'models';

import mainRoutes from 'routes/main';
import authRoutes from 'routes/auth';
import adminRoutes from 'routes/admin';

const dev = process.env.NODE_ENV !== 'production';

async function startServer(port, keys) {
  const app = next({ dev });
  const handler = app.getRequestHandler();

  await app.prepare();

  const server = new Koa();
  const router = new Router();

  server.keys = keys;

  server.use(session({ key: 'hftos' }, server));
  server.use(bodyParser());

  server.use(auth.initialize());
  server.use(auth.session());

  router.get('*', async ctx => {
    await handler(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(adminRoutes.routes());
  server.use(authRoutes.routes());
  server.use(mainRoutes.routes());
  server.use(router.routes());

  server.listen(port);
}

startServer(process.env.PORT, ['development']);
