import User from '../data/models/User';
import router from './router';

class InvalidUser {}

router.post('/login', async ctx => {
  const params = ctx.request.body;
  const user = await User.findOne({ where: { email: params.email } });
  if (!user) {
    throw new InvalidUser();
  }
  ctx.body = true;
});

router.post('/signup', async ctx => {
  const params = ctx.request.body;
  await User.create({
    firstName: params.firstName,
    lastName: params.lastName,
    email: params.email,
  });
  ctx.body = true;
});
