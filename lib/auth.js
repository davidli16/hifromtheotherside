import bcrypt from 'bcrypt';
import passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import User from 'models/User';

passport.serializeUser(async (user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user || !await bcrypt.compare(password, user.passwordHash)) {
          return done(null, false);
        }
        return done(null, user);
      } catch (error) {
        return done(error);
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
      } catch (error) {
        return done(error);
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
