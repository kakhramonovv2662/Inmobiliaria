import ReactDOM from 'react-dom';
import type { FC, ReactElement } from 'react';
import { App } from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/global-styles';
import { ErrorBoundary } from '@components/error-boundary';
import fetchIntercept from 'fetch-intercept';
import { storageService } from './services/storage.service';
import { init } from './localization';
import 'leaflet/dist/leaflet.css';
// import type { SetupWorkerApi } from 'msw';
import { getSubdomain } from '@utils/url';
import { config as globalConfig } from './config';

interface InterceptError extends Error {
  status?: string | number;
  body?: any;
}

// if (globalConfig.isDevelopment) {
//   const { worker }: { worker: SetupWorkerApi } = require('./mocks/browser');
//   worker.start({
//     quiet: true
//   });
// }

init();

fetchIntercept.register({
  request: function (url, config) {
    if (config?.headers) {
      config.headers['x-tenant-id'] = getSubdomain();
      if (globalConfig.isDevelopment) {
        config.headers['x-authorization'] = storageService.getAccessToken();
      }
    }
    return [url, config];
  },

  requestError: function (error) {
    // Called when an error occurred during another 'request' interceptor call
    return Promise.reject(error);
  },

  response: res => {
    if (res.ok && res.headers.get('x-authorization')) {
      storageService.setAccessToken(res.headers.get('x-authorization'));
    }
    if (res.status === 403) {
      storageService.removeAccessToken();
    }
    if (!res.ok) {
      const error: InterceptError = new Error('Oops! Something went wrong!');
      error.status = res.status;
      error.body = res.json();
      throw error;
    }
    return res;
  },

  responseError: function (error) {
    // Handle an fetch error
    return Promise.reject(error);
  }
});

export const GlobalWrapper: FC<{ children: ReactElement }> = ({ children }) => (
  <BrowserRouter>
    <GlobalStyles />
    {children}
  </BrowserRouter>
);

ReactDOM.render(
  <ErrorBoundary>
    <GlobalWrapper>
      <App />
    </GlobalWrapper>
  </ErrorBoundary>,
  document.getElementById('root')
);

serviceWorkerRegistration.register({
  onUpdate: registration => {
    console.log('SW: onUpdate');
  },
  onSuccess: registration => {
    console.log('SW: onSuccess');
  }
});
