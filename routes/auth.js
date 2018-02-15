import User from '../data/models/User';
import passport from '../lib/auth';
import Router from 'koa-router';

const router = new Router();

class InvalidUser {}

router.post('/signup', async ctx => {
  const params = ctx.request.body;
  await User.create({
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email,
  });
  ctx.body = true;
});

router.post('/login', async ctx => {
  return passport.authenticate('local', (err, user, info) => {
    if (user) {
      ctx.login(user);
      ctx.body = true;
    } else {
      ctx.status = 400;
    }
  })(ctx);
});

router.post('/auth/facebook', ctx => {
  return passport.authenticate('facebook');
});

router.get('/auth/facebook/callback', async ctx => {
  return passport.authenticate('facebook', (err, user, info) => {
    if (user) {
      ctx.body = true;
    } else {
      ctx.status = 400;
    }
  })(ctx);
});

router.get('/logout', ctx => {
  ctx.logout();
  ctx.redirect('/');
});

export default router;
