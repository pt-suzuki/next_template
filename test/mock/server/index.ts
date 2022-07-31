import { Server } from 'http';
import jsonServer from 'json-server';

let server: Server;
const PORT = 3228;

export const startMockServer = (): void => {
  const app = jsonServer.create();
  /*
  app.use(
    jsonServer.rewriter({
      '/api/private/example':'/example',
    }),
  );
  */
  const middlewares = jsonServer.defaults();
  const router = jsonServer.router('test/mock/server/db.json');
  app.use(middlewares);
  app.use(router);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (router as any).render = (req, res) => {
    // json-serverのデフォルト設定で201を返すので200を返すように修正
    res.status(200).jsonp(res.locals.data);
  };

  server = app.listen(PORT, function () {
    console.log(`json-server started on localhost:${PORT}.`);
  });
};

export const stopMockServer = (): void => {
  server.close(() => {
    console.log('json-server closed.');
  });
};
