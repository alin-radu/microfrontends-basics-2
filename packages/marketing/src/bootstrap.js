import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

// mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate(location) {
      const { pathname: nextPathame } = location;
      const { pathname: currentPathname } = history.location;

      if (currentPathname !== nextPathame) {
        history.push(nextPathame);
      }
    },
  };
};

// if we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    const obj = {
      defaultHistory: createBrowserHistory(),
    };
    mount(devRoot, obj);
  }
}

// we are running through container and we should export the mount function
export { mount };
