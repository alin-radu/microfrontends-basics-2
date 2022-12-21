import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'auth/AuthApp';

const AuthApp = ({ onSignIn }) => {
  const history = useHistory();
  const ref = useRef();

  useEffect(() => {
    const obj = {
      initialPath: history.location.pathname,
      onNavigate: (location) => {
        const { pathname: nextPathame } = location;
        const { pathname: currentPathname } = history.location;

        if (currentPathname !== nextPathame) {
          history.push(nextPathame);
        }
      },
      onSignIn: () => onSignIn(),
    };

    const { onParentNavigate } = mount(ref.current, obj);

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default AuthApp;
