import Router from 'koa-router';

import passport from 'lib/auth';

const router = new Router({ prefix: '/admin' });

export default router;
