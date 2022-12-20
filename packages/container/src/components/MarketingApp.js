// container

import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
  const history = useHistory();
  const ref = useRef();

  useEffect(() => {
    const obj = {
      onNavigate: (location) => {
        const { pathname: nextPathame } = location;
        const { pathname: currentPathname } = history.location;

        if (currentPathname !== nextPathame) {
          history.push(nextPathame);
        }
      },
    };

    const { onParentNavigate } = mount(ref.current, obj);

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default MarketingApp;
