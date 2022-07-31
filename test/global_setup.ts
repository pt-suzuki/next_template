import { loadEnvConfig } from '@next/env';
import { startMockServer } from './mock/server';

const setup = async (): Promise<void> => {
  setupEnv();
  startMockServer();
};

const setupEnv = () => {
  loadEnvConfig(process.env.PWD || process.cwd());
};

export default setup;
