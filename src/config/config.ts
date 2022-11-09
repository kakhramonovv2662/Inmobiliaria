const stage = process.env.NODE_ENV as 'development' | 'production' | 'test';

type Config = {
  apiUrl: string;
  isDevelopment: boolean;
};

const configs: Record<'development' | 'production' | 'test', Config> = {
  development: {
    apiUrl: 'http://139.59.159.198:707',
    isDevelopment: true
  },
  production: {
    apiUrl: 'http://139.59.159.198:707',
    isDevelopment: false
  },
  test: {
    apiUrl: 'http://139.59.159.198:707',
    isDevelopment: true
  }
};

export const config = configs[stage];
