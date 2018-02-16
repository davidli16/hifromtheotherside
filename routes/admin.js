import Router from 'koa-router';

import User from 'models/User';

const router = new Router({ prefix: '/admin' });

router.get('/users.json', async ctx => {
  const users = await User.all();
  ctx.body = {
    status: 'success',
    data: users.map(user => ({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    })),
  };
});

export default router;
