import { stopMockServer } from './mock/server';

const teardown = async (): Promise<void> => {
  stopMockServer();
};

export default teardown;
