import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import next from 'next';
import * as http from 'http';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { environments } from '../config/environments';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

const main = async (): Promise<void> => {
  await app.prepare();

  const server = express();
  server.use(
    '/api',
    createProxyMiddleware({
      target: environments.apiRoot,
      changeOrigin: true,
      onProxyReq(proxyReq: http.ClientRequest, _a: Request, _s: Response): void {
        proxyReq.setHeader('Origin', environments.apiRoot);
      },
    }),
  );
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });
  server.listen(environments.frontPort, (err?: any) => {
    if (err) throw err;
    console.log(`> Ready on localhost:${environments.frontPort} - env ${process.env.NODE_ENV}`);
  });
};

main().catch((err) => {
  console.error('[ERROR] Faild to start Next.js Server.', err);
});
