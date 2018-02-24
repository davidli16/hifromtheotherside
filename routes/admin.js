import Router from 'koa-router';

import User from 'models/User';
import Question from 'models/Question';

const router = new Router({ prefix: '/admin' });

router.get('/users/getAll', async ctx => {
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

router.get('/questions/getAll', async ctx => {
  const questions = await Question.all();
  ctx.body = {
    status: 'success',
    data: questions,
  };
});

router.post('/questions/create', async ctx => {
  const params = ctx.request.body;
  const question = await Question.create({
    topic: params.topic,
    text: params.text,
  });
  ctx.body = {
    status: 'success',
    data: question,
  };
});

export default router;
