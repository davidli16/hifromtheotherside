import passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as FacebookStrategy } from 'passport-facebook';

passport.serializeUser(async (user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(err, user);
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ where: { email: username } });
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.use(
  new FacebookStrategy(
    {
      clientID: 'abc',
      clientSecret: '123',
      callbackUrl: 'callback',
    },
    async token => {
      try {
        const user = await User.findOne({ where: { fbid: token } });
        if (!user) {
          return done(null, false);
        }
        done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.use(
  new FacebookStrategy(
    {
      clientID: 'abc',
      clientSecret: '123',
      callbackUrl: 'callback',
    },
    async token => {
      try {
        const user = await User.findOne({ where: { fbid: token } });
        done(null, user);
      } catch (err) {
        done(err);
      }
    },
  ),
);

export default passport;
