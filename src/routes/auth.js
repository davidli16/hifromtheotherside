import Router from 'koa-router';

import User from 'data/models/User';
import passport from 'lib/auth';

const router = new Router();

class InvalidUser {}

router.post('/signup', async ctx => {
  const params = ctx.request.body;
  try {
    await User.create({
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      password: params.password,
    });
    ctx.body = { status: 'success' };
  } catch (error) {
    ctx.body = { status: 'error', data: error.name };
  }
});

router.post('/login', async ctx => {
  return passport.authenticate('local', (err, user, info) => {
    if (user) {
      ctx.login(user);
      ctx.body = { status: 'success' };
    } else {
      ctx.body = { status: 'error', message: 'UserNotFound' };
    }
  })(ctx);
});

router.post('/auth/facebook', ctx => {
  return passport.authenticate('facebook');
});

router.get('/auth/facebook/callback', async ctx => {
  return passport.authenticate('facebook', (err, user, info) => {
    if (user) {
      ctx.body = { status: 'success' };
    } else {
      ctx.body = { status: 'error', message: 'UserNotFound' };
    }
  })(ctx);
});

router.get('/logout', ctx => {
  ctx.logout();
  ctx.redirect('/');
});

export default router;
