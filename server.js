import Koa from 'koa';
import router from 'koa-react-router';

import App from './components/App';
import Container from './components/Container';

const app = new Koa();

app
  .use(
    router({
      App,
      onError(ctx, err) {
        console.log(`Error: ${err}`);
      },
      onRender(ctx) {
        return {
          Container,
        };
      },
    }),
  )
  .listen(3000);
