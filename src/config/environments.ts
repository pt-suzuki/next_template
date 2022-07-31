export interface EnvironmentVariables {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  NODE_ENV: string;
  frontPort: string;
  frontRootUrl: string;
  apiRoot: string;
}

export const environments: EnvironmentVariables = {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  NODE_ENV: process.env.NODE_ENV!,
  frontPort: process.env.NEXT_PORT ?? '3128',
  frontRootUrl: process.env.NEXT_ROOT ?? 'http://localhost:3128',
  apiRoot: process.env.NEXT_API_ROOT ?? 'http://localhost:3127',
};
