import Router from 'koa-router';

import User from 'models/User';
import Question from 'models/Question';
import Event from 'models/Event';

const router = new Router({ prefix: '/admin' });

router.get('/users/getAll', async ctx => {
  const users = await User.all();
  ctx.body = {
    status: 'success',
    data: users.map(user => ({
      id: user.id,
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

router.get('/events/getAll', async ctx => {
  const events = await Event.all();
  ctx.body = {
    status: 'success',
    data: events,
  };
});

router.post('/events/create', async ctx => {
  const params = ctx.request.body;
  const event = await Event.create({
    name: params.name,
    description: params.description,
    code: params.code,
  });
  ctx.body = {
    status: 'success',
    data: event,
  };
});

export default router;
