import Router from 'koa-router';
import passport from 'lib/auth';

import Answer from 'models/Answer';
import Question from 'models/Question';

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
    return;
  }
  await next();
});

router.get('/profile/get', async ctx => {
  const { user } = ctx.state;
  const questions = await Question.all();
  const answers = await user.getAnswers();
  ctx.body = {
    status: 'success',
    data: {
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      questions,
      answers,
    },
  };
});

router.post('/profile/update', async ctx => {
  const params = ctx.request.body;
  const { user } = ctx.state;
  user.update({
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email,
  });
  params.answers.forEach((value, questionId) => {
    if (!value) {
      return;
    }
    Answer.upsert({
      userId: user.id,
      questionId: questionId,
      value,
    });
  });
  ctx.body = {
    status: 'success',
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  };
});

export default router;
