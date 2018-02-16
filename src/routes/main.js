import Router from 'koa-router';

import passport from 'lib/auth';

const router = new Router();

router.get('/', async ctx => {
  if (ctx.isAuthenticated()) {
    if (ctx.state.user.isAdmin) {
      ctx.redirect('/admin');
    } else {
      ctx.redirect('/profile');
    }
  } else {
    ctx.redirect('/login');
  }
});

router.get('/profile', async (ctx, next) => {
  if (!ctx.isAuthenticated()) {
    ctx.redirect('/login');
  }
  await next();
});

export default router;
